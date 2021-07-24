import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestclassComponent } from './testclass.component';

describe('TestclassComponent', () => {
  let component: TestclassComponent;
  let fixture: ComponentFixture<TestclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
