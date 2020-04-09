import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  findConfig(): Observable<any> {
    return this.http.get(`assets/config.json?cacheBuster=${environment.cacheBusterHash}`);
  }

  fetchLinks(): Observable<any> {
    return this.http.get(`assets/links.json?cacheBuster=${environment.cacheBusterHash}`);
  }
}
