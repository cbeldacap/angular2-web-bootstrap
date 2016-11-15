import { Component } from '@angular/core';
import { db } from '../../mock';

@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})

export class MainComponent {
  constructor() {}

  runAlert(option: number) {
    alert('Clicked option ' + option + '!');
  }
}
