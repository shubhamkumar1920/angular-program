import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngswitch',
  template:`
  <div [ngSwitch]="course">
  <div *ngSwitchCase="'Java'"><h2>you are Java student</h2></div>
  <div *ngSwitchCase="'php'"><h2>you are php student</h2></div>
  <div *ngSwitchCase="'Meanstack'"><h2>you are meanstack student</h2></div>
  <div *ngSwitchDefault><h2>you are not Enrolled yet</h2></div>
  </div>
  `,
  styleUrls: ['./testngswitch.component.css']
})
export class TestngswitchComponent implements OnInit {
  public course="Meanstack";

  constructor() { }

  ngOnInit() {
  }

}
