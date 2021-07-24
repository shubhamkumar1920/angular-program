import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytestComponent } from './propertytest.component';

describe('PropertytestComponent', () => {
  let component: PropertytestComponent;
  let fixture: ComponentFixture<PropertytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
