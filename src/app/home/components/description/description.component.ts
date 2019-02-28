import { Component, Input } from '@angular/core';

@Component({
  selector: 'alo-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent {
  @Input() name;
  @Input() mainDescription;
  @Input() position;
  @Input() profilePic;
  @Input() socialLinks;

  constructor() {}
}
