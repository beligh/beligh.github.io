import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {DefaultLangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-i18n-change',
  templateUrl: './i18n-change.component.html',
  styleUrls: ['./i18n-change.component.scss']
})
export class I18nChangeComponent implements OnInit, OnDestroy {
  currentLanguage: string;

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private translate: TranslateService) {

    translate.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.currentLanguage = event.lang;
    });
  }

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      'uk-flag',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/uk.svg'));

    this.iconRegistry.addSvgIcon(
      'fr-flag',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/france.svg'));
  }

  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  ngOnDestroy(): void {
    this.translate.onDefaultLangChange.unsubscribe();
  }

}
