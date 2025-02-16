import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../../services-backend/user.service';
import { EncryptedUser } from '../../function-user/get-user-local-storage/encrypted-user';
import { User } from '../../interface-entity/user';
import { EncryptedUserLoggedWithGoogle } from '../../function-user/get-user-local-storage/encrypted-user-logged-with-google';
// import { isPlatformBrowser } from '@angular/common';

export interface UserLogged {
  userLoggedWithGoogle: boolean;
}

const oAuthSConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: "http://localhost:4200",
  clientId: '1063713263038-g3s41jorka6950hket6aul54l0n623ql.apps.googleusercontent.com',
  scope: 'openid profile email',
};

export interface UserInfo {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  private userProfileSubject = new BehaviorSubject<User | null>(null);
  userProfile$ = this.userProfileSubject.asObservable();

  constructor(
    private readonly oAuthService: OAuthService,
    private http: HttpClient,
    private userService: UserService
  ) {
    this.configure();
  }

  private configure() {
    this.oAuthService.configure(oAuthSConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      // Verifique se o login foi bem-sucedido
      if (this.oAuthService.hasValidAccessToken()) {
        // A lógica de verificação do perfil
        this.fetchUserProfileAndVerify();
      }
    });
  }

  functionLogin() {
    this.oAuthService.initLoginFlow();
  }

  get identityClaims() {
    return this.oAuthService.getIdentityClaims();
  }

  get accessToken() {
    return this.oAuthService.getAccessToken();
  }

  fetchUserProfileAndVerify() {
    if (this.identityClaims) {
      const url = "https://www.googleapis.com/oauth2/v2/userinfo";

      const userLogged: UserLogged = {
        userLoggedWithGoogle: true,
      };

      EncryptedUserLoggedWithGoogle(userLogged);

      this.http.get<UserInfo>(url, {
        headers: { Authorization: `Bearer ${this.accessToken}` }
      })
      .pipe(
        tap(profile => {
          const userObj = {
            name: profile.name,
            email: profile.email,
            lastName: profile.family_name
          };

          // Chamar API para criar conta do usuário no backend
          this.userService.createAccountWithGoogle(userObj).subscribe({
            next: async (success) => {
              const user = success.data;
              this.userProfileSubject.next(user);

              EncryptedUser(user);
            },
            error: error => {
              if (error.status === 400) {
                console.log(error);
              }
            }
          });
        })
      )
      .subscribe();
    }
  }

  logout() {
    this.oAuthService.logOut();
    this.userProfileSubject.next(null);
  }
}
