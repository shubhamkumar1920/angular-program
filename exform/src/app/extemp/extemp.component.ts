import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extemp',
  templateUrl: './extemp.component.html',
  styleUrls: ['./extemp.component.css']
})
export class ExtempComponent implements OnInit {

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
  constructor() { }

  ngOnInit() {
  }

}
