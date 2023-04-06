import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-data',
  templateUrl: './server-data.component.html',
  styleUrls: ['./server-data.component.css'],
})
export class ServerDataComponent {
  @Output() pullData = new EventEmitter<{
    type: string;
    serverNanme: string;
    serverContetn: string;
  }>();
  serverSubmit(inputName: HTMLInputElement, inputContent: HTMLInputElement) {
    console.log(this.pullData);
    this.pullData.emit({
      type: 'server',
      serverNanme: inputName.value,
      serverContetn: inputContent.value,
    });
  }

  blumprintSubmit(inputName: HTMLInputElement, inputContent: HTMLInputElement) {
    // console.log(inputName.value, inputContent.value);
    this.pullData.emit({
      type: 'blumprint',
      serverNanme: inputName.value,
      serverContetn: inputContent.value,
    });
  }
}
