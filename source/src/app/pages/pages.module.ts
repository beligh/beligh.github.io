import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { LinkDetailsComponent } from './useful-links/link-details/link-details.component';

import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CvComponent,
    PageNotFoundComponent,
    UsefulLinksComponent,
    LinkDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
