import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngfor',
  template:`
  <div *ngFor="let course of course;index as i">
   <h2>{{i+1}}{{course}}</h2>
   </div>
  `,
  styleUrls: ['./testngfor.component.css']
})
export class TestngforComponent implements OnInit {
  public course=["php","sql","java","meanstack","nasim"];
  constructor() { }

  ngOnInit() {
  }

}
