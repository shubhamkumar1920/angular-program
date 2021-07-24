import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TestdatabindingComponent } from './testdatabinding/testdatabinding.component';
import { TestclassComponent } from './testclass/testclass.component';
import { TeststyleComponent } from './teststyle/teststyle.component';
import { TesttwowayComponent } from './testtwoway/testtwoway.component';
import { PropertytestComponent } from './propertytest/propertytest.component';
import { TestngifComponent } from './testngif/testngif.component';
import { TestngswitchComponent } from './testngswitch/testngswitch.component';
import { TestngforComponent } from './testngfor/testngfor.component';
import { TestpipeComponent } from './testpipe/testpipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestdatabindingComponent,
    TestclassComponent,
    TeststyleComponent,
    TesttwowayComponent,
    PropertytestComponent,
    TestngifComponent,
    TestngswitchComponent,
    TestngforComponent,
    TestpipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
