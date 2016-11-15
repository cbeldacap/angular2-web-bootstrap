import { Component, ViewChild } from '@angular/core';
import { SecurityService } from '../../security/security.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['../../css/app.component.css']
})

export class LoginComponent {

  @ViewChild('username') username;
  @ViewChild('password') password;
  constructor (public security: SecurityService) {

  }

  doLogin(form: any) {
    this.security.login(this.username.nativeElement.value, this.password.nativeElement.value);
  }

}
