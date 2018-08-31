import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeComponentList } from './employee/emp.complist';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';

@NgModule({
  declarations: [
    AppComponent , EmployeeComponent, EmployeeComponentList, EmployeeTitlePipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }