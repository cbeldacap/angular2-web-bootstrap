import { Component, Input } from '@angular/core';

@Component({
  selector: 'details',
  templateUrl: './details.component.html'
})

export class DetailsComponent {
  @Input('entity') entity: any;
  constructor() {}
}
