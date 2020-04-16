import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesModule} from './pages/pages.module';

const routes: Routes = [
//  { path: '', loadChildren:  () => import(`./pages/pages.module`).then(m => m.PagesModule) }
 //  { path: '', loadChildren: './pages/pages.module#PagesModule' }
  { path: '', loadChildren:  () => PagesModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
