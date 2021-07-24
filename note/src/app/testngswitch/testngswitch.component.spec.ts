import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngswitchComponent } from './testngswitch.component';

describe('TestngswitchComponent', () => {
  let component: TestngswitchComponent;
  let fixture: ComponentFixture<TestngswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestngswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestngswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
