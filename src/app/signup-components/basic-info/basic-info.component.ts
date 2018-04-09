import { SignupPageComponent } from './../../signup-page/signup-page.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('basic-info')
  basicInfo: FormGroup;

  
  constructor() { }

  isValidField(field: string) {

    
    return this.basicInfo.get(field).touched && this.basicInfo.get(field).invalid;
  }

  displayCssField(field: string) {

    return {
      'has-error': this.isValidField(field),
      'has-feedback': this.isValidField(field)
    };
  }

  ngOnInit() {

  }

  get firstName() {

    return this.basicInfo.get('firstName');
  }

  get lastName() {

    return this.basicInfo.get('lastName');
  }

  get dateOfBirth() {

    return this.basicInfo.get('dateOfBirth');
  }

}
