import { Component, OnInit } from '@angular/core';
import {AppService} from '@app/core/services/app.service';
import {map, mergeAll, shareReplay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss']
})
export class UsefulLinksComponent implements OnInit {
  dataSource: any = [] ;
  breakpoint: number;
  defaultImage = `assets/img/cube64px.svg`;
  imageToShowOnError = 'assets/img/notfound.png';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private appService: AppService,
              private router: Router,
              private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpoint = this.resizeScreen();
    this.fetchLinks();
  }

  fetchLinks(): void {
    this.appService.fetchLinks().pipe(
        map((response: any) => response.data),
        mergeAll()
      ).subscribe((data: any) => {
        this.dataSource = [...this.dataSource, data];
    });
  }

  onResize(event) {
    this.breakpoint = this.resizeScreen(event);
    console.log('this.breakpoint ', this.breakpoint);
  }

  private resizeScreen(event?): number {
    if (event){
      if (event.target.innerWidth < 610) {
        return 1;
      } else if (event.target.innerWidth >= 610 && event.target.innerWidth < 1220) {
        return 2;
      } else if (event.target.innerWidth >= 1220) {
        return 4;
      }
    } else {
      if (window.innerWidth < 610) {
        return 1;
      } else if (window.innerWidth >= 610 && window.innerWidth < 1220) {
        return 2;
      } else if (window.innerWidth >= 1220) {
        return 4;
      }
    }
  }

  goToDetails(id: string) {
    this.router.navigate(['/useful-links', id]);
  }

}
