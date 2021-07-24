import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testclass',
  template: ` 
  <h1>Welcome shubham</h1>
  <h2 class="text-success">welcome ardent</h2>
  <h2 [class]="SuccessClass">welcome ardent</h2>
  <h2 class="text-Special" [class]="SuccessClass">welcome student</h2>
  <h2 [class.text-danger]="hasError">class is started</h2>
  
  <h2 [ngClass]="messageClass">hello all</h2>
  `,
  styles: [`
     .text-success{
       color:green;
     } 
     .text-danger
     {
       color:red;
     }
     .text-special
     {
       font-style:italic;
     }
  `]
})
export class TestclassComponent implements OnInit {

  public SuccessClass="text-success";
  public hasError=true;
  public isSpecial=true;
  public messageClass={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  } 
  constructor() { }

  ngOnInit() {
  }

}
