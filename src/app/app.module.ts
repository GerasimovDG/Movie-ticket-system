import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CookieService } from "ngx-cookie-service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BookingPageComponent } from "./booking-page/booking-page.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PasswordEyeDirective } from "./directives/password-eye.directive";
import { PageNotFoundComponent } from "./error-pages/page-not-found/page-not-found.component";
import { FilmInformationPageComponent } from "./film-information-page/film-information-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginPageComponent,
    DashboardComponent,
    FilmInformationPageComponent,
    BookingPageComponent,
    PageNotFoundComponent,
    PasswordEyeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
