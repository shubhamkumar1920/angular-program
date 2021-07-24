import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExreactComponent } from './exreact.component';

describe('ExreactComponent', () => {
  let component: ExreactComponent;
  let fixture: ComponentFixture<ExreactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExreactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
