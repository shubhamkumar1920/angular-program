import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testtwoway',
  template:`
  <input [(ngModel)]="name" type="text">
  {{name}}
  `,
  styles: [``]
})
export class TesttwowayComponent implements OnInit {
  public name="shubham";

  constructor() { }

  ngOnInit() {
  }

}
