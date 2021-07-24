import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testdatabinding',
  template:`
  <h2>Hello {{name}}</h2>
  <h2>{{2+2}}</h2><!--Evaluate expression-->
  <h2>{{"welcome" + name}}</h2><!--String concatenation-->
  <h2>{{name.length}}</h2><!--javascript build in function-->
  <h2>{{welcomeuser()}}</h2><!--we can call user definedfunction of javascript-->
  <!--<h2>{{ab=99}}</h2> not possible in interpolation-->
  <!--<h2>{{window.location.href}}</h2> not possible in interpolation.can not access-->
  <h2>{{url}}</h2>
  `,
  styleUrls: ['./testdatabinding.component.css']
})
export class TestdatabindingComponent implements OnInit {
  public name="shubham";
  public url=window.location.href;

  constructor() { }

  ngOnInit() {
  }
welcomeuser()
{
  return "welcome"+this.name;
}
}
