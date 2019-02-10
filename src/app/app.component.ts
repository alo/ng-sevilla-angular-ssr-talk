import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
import { ngSevillaWebData } from './models/ngSevillaWebData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngSevilla';
  data: ngSevillaWebData;

  constructor(private myDataService: MyDataService) {
    this.data = this.myDataService.getData();
  }
}
