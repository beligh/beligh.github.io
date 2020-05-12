import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map, mergeAll, tap} from 'rxjs/operators';
import {AppService} from '../../../core/services/app.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-link-details',
  templateUrl: './link-details.component.html',
  styleUrls: ['./link-details.component.scss']
})
export class LinkDetailsComponent implements OnInit, OnDestroy {
  id: string;
  private sub$: any;
  dataSource: any = [] ;
  displayedColumns = ['name', 'details', 'url'];

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.sub$ = this.route.params.subscribe(params => {
      this.id = params.id;
      this.fetchLinksById(this.id);
    });
  }

  private fetchLinksById(id: string): void {
    this.appService.fetchLinks().pipe(
      map((response: any) => response.data),
      mergeAll(),
      filter((data: any) => data.id === id),
      map(data => data.links),
    ).subscribe((data: any) => {
      this.dataSource = data;
    });
  }

  backClicked() {
    this.location.back();
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

}
