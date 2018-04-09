import { SignupPageComponent } from './../../signup-page/signup-page.component';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'address-info',
  templateUrl: './addres-info.component.html',
  styleUrls: ['./addres-info.component.css']
})
export class AddresInfoComponent implements OnInit {

  listOfStates = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM',
  'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
  'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
  'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW',
  'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA',
  'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'];

  // tslint:disable-next-line:no-input-rename
  @Input('address-info')
  addressInfo: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  isValidField(field: string) {

    return this.addressInfo.get(field).touched && !this.addressInfo.get(field).valid;
  }

  displayCssField(field: string) {

    return {
      'has-error': this.isValidField(field),
      'has-feedback': this.isValidField(field)
    };
  }

  get street() {

    return this.addressInfo.get('street');
  
  }

  get city() {

    return this.addressInfo.get('city');
  }

  get state() {

    return this.addressInfo.get('state');
  }
}
