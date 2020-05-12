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
    return this.http.get(`assets/data/config.json?cacheBuster=${environment.cacheBusterHash}`);
  }

  fetchLinks(): Observable<any> {
    return this.http.get(`assets/data/links.json?cacheBuster=${environment.cacheBusterHash}`);
  }

  getSkills() {
    return this.http.get(`assets/data/skills.json?version=${environment.cacheBusterHash}`);
  }
}
