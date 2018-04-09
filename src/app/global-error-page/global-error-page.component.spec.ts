import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalErrorPageComponent } from './global-error-page.component';

describe('GlobalErrorPageComponent', () => {
  let component: GlobalErrorPageComponent;
  let fixture: ComponentFixture<GlobalErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalErrorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
