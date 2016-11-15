import { Component, Input } from '@angular/core';

@Component({
  selector: 'entity',
  templateUrl: './entity.component.html'
})

export class EntityComponent {

  @Input('entity') entity: any;
  constructor() {}
}
