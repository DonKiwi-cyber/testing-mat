import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StddevComponent } from './stddev/stddev.component';
import { MediaComponent } from './media/media.component';
import { SimpsonComponent } from './simpson/simpson.component';


@NgModule({
  declarations: [
    AppComponent,
    StddevComponent,
    MediaComponent,
    SimpsonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
