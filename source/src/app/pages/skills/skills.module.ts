import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {SkillsComponent} from '@app/pages/skills/skills.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: SkillsComponent },
];

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SkillsModule { }
