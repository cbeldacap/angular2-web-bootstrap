import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessOperations } from '../../main/BusinessOperations';

@Injectable()
export class SecurityService {

    constructor(private router: Router) {
    }

    login(username, password) {
      // Check credentials with the server...
      document.cookie = "me=" + username;
      this.router.navigate(['/main']);
    }

    logOut() {
      // Clear session, localStorage...
      document.cookie = 'me=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      this.router.navigate(['/login']);
    }

    getCookie(name: string) {
      let value = '; ' + document.cookie;
      let parts = value.split('; ' + name + '=');
      if (parts.length === 2) {
        return parts.pop().split(';').shift();
      }
    };

}
