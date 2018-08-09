import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pageHeader = 'Employee Details';
}