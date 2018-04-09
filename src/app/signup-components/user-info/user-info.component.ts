import { SignupPageComponent } from './../../signup-page/signup-page.component';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('user-info')
  userInfo: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  isFieldValid(field: string) {

    return this.userInfo.get(field).touched && this.userInfo.get(field).invalid;
  }

  displayCssField(field: string) {

    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  get username() {

    return this.userInfo.get('username');
  }

  get password() {

    return this.userInfo.get('password');
  }

  get confirmPassword() {

    return this.userInfo.get('confirmPassword');
  }
}
