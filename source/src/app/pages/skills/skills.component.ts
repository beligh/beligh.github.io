import { Component, OnInit } from '@angular/core';
import {AppService} from '@app/shared/services/app.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  loading: boolean;
  skills: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getConfig();
  }

  getConfig() {
    this.appService.getSkills().subscribe((data: any) => {
      this.loading = true;
      if (data.content) {
        this.skills = data.content;
        this.loading = false;
      }
    });
  }
}
