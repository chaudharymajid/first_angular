import { Component } from "@angular/core";

@Component({
    selector: 'emp-complist',
    templateUrl: 'emp.complist.html'    
})
export class EmployeeComponentList {

    employees : any[];

    constructor(){
    this.employees = [
        {code: '101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '04/25/1984'},
        {code: '102', name: 'Andrew', gender: 'Male', annualSalary: 6500, dateOfBirth: '03/26/1985'},
        {code: '103', name: 'Kate', gender: 'Female', annualSalary: 6000, dateOfBirth: '02/27/1986'},
        {code: '104', name: 'Marry', gender: 'Female', annualSalary: 7000, dateOfBirth: '01/28/1987'},
    ]};

    getEmployees():void{
        this.employees = [
            {code: '101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '04/25/1984'},
            {code: '102', name: 'Andrew', gender: 'Male', annualSalary: 6500, dateOfBirth: '03/26/1985'},
            {code: '103', name: 'Kate', gender: 'Female', annualSalary: 6000, dateOfBirth: '02/27/1986'},
            {code: '104', name: 'Marry', gender: 'Female', annualSalary: 7000, dateOfBirth: '01/28/1987'},
            {code: '105', name: 'Nancy', gender: 'Female', annualSalary: 7100, dateOfBirth: '01/09/1901'},
        ]
    };

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}