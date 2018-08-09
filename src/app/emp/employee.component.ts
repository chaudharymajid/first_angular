import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: './app/emp/employee.component.html'  
})
export class EmpComponent {
  firstName : string = 'Tom';
  lasttName : string = 'Hopkins';
  gender : string = 'Male';
  age : number = 30;
}
