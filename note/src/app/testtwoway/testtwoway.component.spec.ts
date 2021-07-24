import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttwowayComponent } from './testtwoway.component';

describe('TesttwowayComponent', () => {
  let component: TesttwowayComponent;
  let fixture: ComponentFixture<TesttwowayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttwowayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
