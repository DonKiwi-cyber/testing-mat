import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StddevComponent } from './stddev/stddev.component';
import { MediaComponent } from './media/media.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { SimpsonComponent } from './simpson/simpson.component';

@NgModule({
  declarations: [
    AppComponent,
    StddevComponent,
    MediaComponent,
<<<<<<< HEAD
    LinearRegressionComponent,
    SimpsonComponent
=======
    SimpsonComponent,
    //LinearRegressionComponent
>>>>>>> 811000021645ebc88e5a2ab3d83c53d78b240103
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
