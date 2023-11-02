import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StddevComponent } from './stddev/stddev.component';
import { MediaComponent } from './media/media.component';
<<<<<<< HEAD
import { SimpsonComponent } from './simpson/simpson.component';
import { CorrelationComponent } from './correlation/correlation.component';
=======
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
>>>>>>> d94493f72e442fdd12e8d9a21245893f2b3b2eea


@NgModule({
  declarations: [
    AppComponent,
    StddevComponent,
    MediaComponent,
<<<<<<< HEAD
    SimpsonComponent,
CorrelationComponent
=======
    LinearRegressionComponent
>>>>>>> d94493f72e442fdd12e8d9a21245893f2b3b2eea
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
