import { GlobalErrorHandler } from './../common/error.globalerror';
import { ApplicationErrorHandler } from './../common/error.application';
import { PasswordValidator } from './../common/validator/validator.password';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  signupForm: FormGroup;
  invalid: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({

      basicInfo: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dateOfBirth: ['', Validators.required]
      }),

      addressInfo: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required]
      }),

      contactInfo: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
      }),

      userInfo: this.formBuilder.group({
        username: ['', [Validators.minLength(3), Validators.required]],
        password: ['', [Validators.minLength(3), Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }, {
        validator: PasswordValidator.passwordConfirmer
      })
    });
  }

 validateForm(form: FormGroup) {

  Object.keys(form.controls).forEach(fields => {

    const field = form.get(fields);

    if (field instanceof FormControl) {

      return field.markAsTouched();

    } else if (field instanceof FormGroup) {

      return this.validateForm(field);
    }
  });
 }

  onSubmit(values: HTMLInputElement) {
    
   if (values) {
     if (this.signupForm.valid) {
       console.log('hello');
     }
   } else {
     
     this.validateForm(this.signupForm);
     throw new GlobalErrorHandler();
   }
  }
  

  get firstName() {
    return this.signupForm.get('basicInfo').get('firstName');
  }

  get lastName() {

    return this.signupForm.get('basicInfo').get('lastName');
  }

  get dateOfBirth() {

    return this.signupForm.get('basicInfo').get('dateOfBirth');
  }
}
