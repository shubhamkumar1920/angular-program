import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdatabindingComponent } from './testdatabinding.component';

describe('TestdatabindingComponent', () => {
  let component: TestdatabindingComponent;
  let fixture: ComponentFixture<TestdatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
