import { GlobalErrorHandler } from './common/error.globalerror';
import { ErrorHandler } from '@angular/core';
import { fakeBackendProvider } from './service/service.fakebackend';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { AuthenticationService } from './service/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LogoutComponent } from './logout/logout.component';
import { AccessDeniedPageComponent } from './access-denied-page/access-denied-page.component';
import { GlobalErrorPageComponent } from './global-error-page/global-error-page.component';
import { BasicInfoComponent } from './signup-components/basic-info/basic-info.component';
import { AddresInfoComponent } from './signup-components/addres-info/addres-info.component';
import { ContactInfoComponent } from './signup-components/contact-info/contact-info.component';
import { UserInfoComponent } from './signup-components/user-info/user-info.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { AuthHttp } from 'angular2-jwt';


@NgModule({
  declarations: [
    AppComponent,
    BootstrapPanelComponent,
    HomePageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    SignupPageComponent,
    LogoutComponent,
    AccessDeniedPageComponent,
    GlobalErrorPageComponent,
    BasicInfoComponent,
    AddresInfoComponent,
    ContactInfoComponent,
    UserInfoComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent, canActivate: [AuthGaurdService]},
      {path: 'login', component: LoginPageComponent},
      {path: 'signup', component: SignupPageComponent},
      {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGaurdService]},
      {path: '**', component: GlobalErrorPageComponent}
    ])
   
  ],
  providers: [
    AuthenticationService,
    AuthGaurdService,
    AuthHttp,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},

    //fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
