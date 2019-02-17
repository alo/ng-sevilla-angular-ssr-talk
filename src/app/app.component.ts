import { Component } from '@angular/core';
import { MainDescription } from './models/main-description.interface';
import { AppService } from './app.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: MainDescription;

  constructor(
    private appService: AppService,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.data = this.appService.getData();
    this.title.setTitle(this.data.title);
    this.meta.addTags(this.data.metas);
  }
}
