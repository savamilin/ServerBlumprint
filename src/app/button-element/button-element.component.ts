import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.css'],
})
export class ButtonElementComponent {
  @Input() userData: any;
}
