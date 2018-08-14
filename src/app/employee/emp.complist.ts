import { Component } from "@angular/core";

@Component({
    selector: 'emp-complist',
    templateUrl: 'emp.complist.html',
    styleUrls : ['emplist.comp.css']
})
export class EmployeeComponentList {

    employees : any[];

    constructor(){
    this.employees = [
        {code: '101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/04/1984'},
        {code: '102', name: 'Andrew', gender: 'Male', annualSalary: 6500, dateOfBirth: '26/03/1985'},
        {code: '103', name: 'Kate', gender: 'Female', annualSalary: 6000, dateOfBirth: '27/02/1986'},
        {code: '104', name: 'Marry', gender: 'Female', annualSalary: 7000, dateOfBirth: '28/01/1987'},
    ]};

    getEmployees():void{
        this.employees = [
            {code: '101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/04/1984'},
            {code: '102', name: 'Andrew', gender: 'Male', annualSalary: 6500, dateOfBirth: '26/03/1985'},
            {code: '103', name: 'Kate', gender: 'Female', annualSalary: 6000, dateOfBirth: '27/02/1986'},
            {code: '104', name: 'Marry', gender: 'Female', annualSalary: 7000, dateOfBirth: '28/01/1987'},
            {code: '105', name: 'Nancy', gender: 'Female', annualSalary: 7100, dateOfBirth: '28/01/1989'},
        ]
    };

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}