import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapfunctionComponent } from './mapfunction/mapfunction.component';
import { JscreatorComponent } from './jscreator/jscreator.component';

@NgModule({
  declarations: [
    AppComponent,
    FunfactsComponent,
    PromisesComponent,
    CallbacksComponent,
    MapfunctionComponent,
    JscreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
