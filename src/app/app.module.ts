import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeComponentList} from './employee/emp.complist';

@NgModule({
  declarations: [
    AppComponent , EmployeeComponent, EmployeeComponentList
  ],
  imports: [
    BrowserModule, FormsModule, SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }