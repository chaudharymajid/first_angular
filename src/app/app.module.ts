import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeComponentList } from './employee/emp.complist';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';

@NgModule({
  declarations: [
    AppComponent , EmployeeComponent, EmployeeComponentList, EmployeeTitlePipe, EmployeeCountComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, BsDropdownModule, TooltipModule, ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }