import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapfunctionComponent } from './mapfunction/mapfunction.component';
import { JscreatorComponent } from './jscreator/jscreator.component';
import { ShellComponent } from './shared/shell/shell.component';
import { ArtistInfoComponent } from './artist-info/artist-info.component';


const routes: Routes = [
  {
    path: 'funfacts', component: FunfactsComponent
  },
  {   
    path: 'promises', component: PromisesComponent
  },
  {
    path: 'callbacks', component: CallbacksComponent
  },
  {
    path:'mapfunction', component: MapfunctionComponent
  },
  {
    path:'jscreator', component: JscreatorComponent
  },
  {
    path: 'shared', component: ShellComponent
  },
  {
    path: 'artistinfo', component: ArtistInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
