import {  Component, OnInit } from '@angular/core';
import { Message, MyHttpService } from '../../../login-and-register-new-account/service/my-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-second',
  templateUrl: './header-second.component.html',
  styleUrl: './header-second.component.scss'
})
export class HeaderSecondComponent implements OnInit {
  ShowModalAccount = false;

  constructor(private http: MyHttpService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        const code = params["code"];

        if (code !== undefined) {
          this.http.getToken(code).subscribe(result => {
            if (result === true) {
              this.http.authenticationLoginGoogle("/login-google").subscribe((data: Message) => {
                console.log(data); // Aqui da para retornar um objeto "User" para salvar no "localStorage" com token dentro dele

              });
            } else {
              console.log("algum erro no login");
            }
          });
        }
      }
    );
  }
}

