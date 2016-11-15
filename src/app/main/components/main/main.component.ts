import { Component } from '@angular/core';
import { db } from '../../mock';

@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})

export class MainComponent {

  data: any;
  selected: boolean = false;
  currentChar: any;
  constructor() {}

  ngOnInit() {
    this.data = db;
  }

  runAlert(option: number) {
    alert('Clicked option ' + option + '!');
  }

  selectChar(char: any) {
    this.currentChar = char;
    this.selected = true;
  }

  closeDetails() {
    this.selected = false;
  }

}
