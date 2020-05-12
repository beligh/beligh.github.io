import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModule) },
  { path: 'skills', loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsModule) },
  // { path: '', loadChildren: './pages/pages.module#PagesModule' }
  // { path: '', loadChildren:  () => PagesModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
