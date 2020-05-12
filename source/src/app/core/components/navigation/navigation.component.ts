import {Component, OnDestroy, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AppService} from '../../services/app.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {DefaultLangChangeEvent, LangChangeEvent, TranslateService, TranslationChangeEvent} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  links: Array<any> = [];
  title: string;
  logo: string;

  constructor(private breakpointObserver: BreakpointObserver,
              private appService: AppService) {
  }

  ngOnInit(): void {
   this.findConfig();
  }

  private findConfig(): void {
    this.appService.findConfig().subscribe(data => {
      this.links = data.links;
      this.title = data.title;
      this.logo = data.logo;
    });
  }

}
