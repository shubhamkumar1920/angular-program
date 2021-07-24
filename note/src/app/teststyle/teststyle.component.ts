import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teststyle',
  template: `
  <h2 [style.color]="'green'">welcome ardent</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">hello Students</h2>
  <h2 [style.color]="highlightColor">Meanstack development</h2>
  <h2 [ngStyle]="titleStyle">angular</h2>
  `,
  styles: [`
  `]
})
export class TeststyleComponent implements OnInit {
  public hasError=true;
  public highlightColor="red";
  public titleStyle={
    color:"green",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit() {
  }

}
