import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpipe',
  template:`
  <h2>{{course}}</h2>
  <h2>{{course | lowercase}}</h2>
  <h2>{{course | uppercase}}</h2>
  <h2>{{msg | titlecase}}</h2>
  <h2>{{course | slice:0:3}}</h2>
  <h2>{{student | json}}</h2>

  <h2>{{7.8293333 | number:'1.2-3'}}</h2>
  <h2>{{7.829 | number:'3.4-5'}}</h2>
  <h2>{{7.829 | number:'3.1-2'}}</h2>
  <h2>{{0.50 | percent}}</h2>
  <h2>{{0.50 | currency}}</h2>
  <h2>{{0.50 | currency:'GBP'}}</h2>
  <h2>{{0.50 | currency:'GBP': 'code'}}</h2>
  
  <h2>{{date}}</h2>
  <h2>{{date | date:'short'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>
  `,
  styleUrls: ['./testpipe.component.css']
})
export class TestpipeComponent implements OnInit {
  public course="Angular";
  public msg="Welcome to angular";
  public student={
    "name": "shubham",
    "lastname": "kumar"
  }
  public date=new Date();
  constructor() { }

  ngOnInit() {
  }

}
