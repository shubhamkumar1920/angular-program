import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtempComponent } from './extemp.component';

describe('ExtempComponent', () => {
  let component: ExtempComponent;
  let fixture: ComponentFixture<ExtempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
