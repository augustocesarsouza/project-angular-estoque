import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { AllSvgModule } from './all-svg/all-svg.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HeaderAndFooterLoginAndRegisterModule } from './header-and-footer-login-and-register/header-and-footer-login-and-register.module';
import { CustomerPanelModule } from './customer-panel/customer-panel.module';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomePageModule, AllSvgModule, HeaderAndFooterLoginAndRegisterModule,
    CustomerPanelModule, OAuthModule.forRoot()],
  providers: [provideClientHydration(), provideHttpClient(withFetch()),],
  bootstrap: [AppComponent],
})
export class AppModule {}
