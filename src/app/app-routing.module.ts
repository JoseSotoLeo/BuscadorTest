import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},

  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },


  { path: '**', loadChildren: () => import('./components/pages/notfound/notfound.module').then(m => m.NotfoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule  { }
