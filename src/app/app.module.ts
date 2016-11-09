import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { OaspModule } from './oasp/oasp.module';

import { Oasp4jsSampleAppComponent } from './main/components/main/oasp4js-sample.component';

@NgModule({
  declarations: [
    Oasp4jsSampleAppComponent
  ],
  imports: [
    BrowserModule,
    OaspModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
  ],
  bootstrap: [Oasp4jsSampleAppComponent]
})
export class AppModule { }
