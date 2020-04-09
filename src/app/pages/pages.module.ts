import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { LinkDetailsComponent } from './useful-links/link-details/link-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {LayoutModule} from '@angular/cdk/layout';


@NgModule({
  declarations: [HomeComponent, AboutComponent, CvComponent, PageNotFoundComponent,
    UsefulLinksComponent, LinkDetailsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule,
    LayoutModule,
  ]
})
export class PagesModule { }
