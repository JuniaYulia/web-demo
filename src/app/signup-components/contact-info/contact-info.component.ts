import { SignupPageComponent } from './../../signup-page/signup-page.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('contact-info')
  contactInfo: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  isFieldValid(field: string) {

    return this.contactInfo.get(field).touched && this.contactInfo.get(field).invalid;
  }

  displayCssField(field: string) {

    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  get email() {

    return this.contactInfo.get('email');
  }

  get phone() {

    return this.contactInfo.get('phone');
  }
}
