import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeComponentList } from './employee/emp.complist';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { homeComponent } from './home/home.component';
import { pageNotFound } from './others/pageNotFound.component';

const appRoutes: Routes = [
  {path: 'home', component: homeComponent},
  {path: 'employees', component: EmployeeComponentList},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: pageNotFound}
]

@NgModule({
  declarations: [
    AppComponent , EmployeeComponent, EmployeeComponentList, EmployeeTitlePipe, EmployeeCountComponent, homeComponent, pageNotFound
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, BsDropdownModule, TooltipModule, ModalModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }