import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WebReqInterceptor } from './web-req.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
