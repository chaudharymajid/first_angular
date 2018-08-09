import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: './employee/employee.component.html'  
})
export class EmpComponent {
  firstName : string = 'Tom';
  lasttName : string = 'Hopkins';
  gender : string = 'Male';
  age : number = 30;
}
