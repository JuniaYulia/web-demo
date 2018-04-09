import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginPage: FormGroup;
  public isInvalidLogin: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {

    this.loginPage = this.formBuilder.group({

      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() {

    return this.loginPage.get('username');
  }

  get password() {

    return this.loginPage.get('password');
  }

  onSubmit(crediantials) {
    
    return this.authService.login(crediantials)
    .subscribe(result => {

      if (result) {

        this.router.navigate(['/']);

      } else {

        this.isInvalidLogin = true;
        console.log('Login in failed');
        return this.validateLoginForm(this.loginPage);
      }
    });
  }

  validateLoginForm(form: FormGroup) {
    
    Object.keys(form.controls).forEach(fields => {

      const field = form.get(fields);

      if (field instanceof FormControl) {

        return field.markAsTouched();

      } else if (field instanceof FormGroup) {

        return this.validateLoginForm(field);
      }
    });
  }

  validateField(field: string) {

    return this.loginPage.get(field);
  }

  displayCssField(field: string) {

    return {
      'has-error': this.validateField(field),
      'has-feedback': this.validateField(field)
    };
  }
}
