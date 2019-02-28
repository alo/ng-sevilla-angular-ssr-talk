import { Component, OnInit } from '@angular/core';
import { MainDescription } from '../../../models/main-description.interface'
import { AppService } from '../../../app.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'ngs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: MainDescription;

  constructor(private appService: AppService, private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.data = this.appService.getData();
    this.title.setTitle(this.data.title);
    this.meta.addTags(this.data.metas);
  }
}
