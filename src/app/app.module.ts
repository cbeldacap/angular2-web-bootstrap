import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { OaspModule } from './oasp/oasp.module';
import { SecurityService } from './main/security/security.service';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './main/components/login/login.component';
import { MainComponent } from './main/components/main/main.component';
import { HeaderComponent } from './main/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    OaspModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [
    SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
