import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(crediantials) {

    return this.http.post('/api/authenticate', JSON.stringify(crediantials))
    .map(response => {

      const result = response.json();

      if (result && result.token) {

        localStorage.setItem('token', result.token);
        return true;

      } else {

        return false;
      }
    });
  }

  logout() {

    localStorage.removeItem('token');
  }

  isLoggedIn() {

    return tokenNotExpired();
  }

  get currentUser() {

    const token = localStorage.getItem('token');

    if (!token) {

      return null;
    }

    return new JwtHelper().decodeToken(token);
  }

  signup(values) {

    
  }
}
