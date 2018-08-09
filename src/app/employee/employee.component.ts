import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: 'app/employee/employee.component.html'  
})
export class EmployeeComponent {
  firstName : string = 'Tom';
  lasttName : string = 'Hopkins';
  gender : string = 'Male';
  age : number = 30;
}
