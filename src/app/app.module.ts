import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { OaspModule } from './oasp/oasp.module';

import { AppComponent } from './main/components/main/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OaspModule,
    FormsModule,
    HttpModule,
    // routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
