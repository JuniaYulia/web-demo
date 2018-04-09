import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresInfoComponent } from './addres-info.component';

describe('AddresInfoComponent', () => {
  let component: AddresInfoComponent;
  let fixture: ComponentFixture<AddresInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
