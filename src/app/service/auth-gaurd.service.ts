import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }


  canActivate(route, state: RouterStateSnapshot) {

   if (this.authService.isLoggedIn()) {

    return true;

   } else {

    this.router.navigate([
      '/login'
    ]);
   }
  }
}
