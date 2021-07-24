import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngif',
  template: `
  <!--<h2 *ngIf="condition;else elseBlock">shubham</h2>
  <ng-template #elseBlock>
  <h2>
  Name is Hidden
  </h2>
  </ng-template>
  <button (click)="statuschange();">sign up</button>-->

  <h2>another example in different way</h2>
  another way to write *ngIf
  <div *ngIf="condition; then thenBlock else elseBlock"></div>
  <ng-template #thenBlock>Content to render when codition is true.</ng-template>
  <ng-template #elseBlock>Content to render when condition is false.</ng-template>

  `,
  styleUrls: ['./testngif.component.css']
})
export class TestngifComponent implements OnInit {
  public condition=false;
  constructor() { }


  ngOnInit() {
  }
 statuschange()
 {
   this.condition=false;
 }
}
