import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: 'emp.comp.html',
  styleUrls: ['emp.comp.css' ]
})
export class EmployeeComponent {
  firstName : string = 'Tom';
  lastName : string = 'Hopkins';
  gender : string = 'Male';
  age : number = 30;
}
