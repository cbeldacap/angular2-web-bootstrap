import { Component } from '@angular/core';
import { SecurityService } from '../../security/security.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(private security: SecurityService) {}

  logOut() {
    this.security.logOut();
  }

}
