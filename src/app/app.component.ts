import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showDatas: string[] = [];
  pickUpData(data: any) {
    this.showDatas.push(data);
    console.log(data);
  }
}
