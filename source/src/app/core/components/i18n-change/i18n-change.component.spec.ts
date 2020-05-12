import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nChangeComponent } from './i18n-change.component';

describe('I18nChangeComponent', () => {
  let component: I18nChangeComponent;
  let fixture: ComponentFixture<I18nChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
