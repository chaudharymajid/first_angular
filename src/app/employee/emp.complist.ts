import { Component } from "@angular/core";
import {IEmployee} from "./employee";

@Component({
    selector: 'emp-complist',
    templateUrl: 'emp.complist.html',
    styleUrls : ['emplist.comp.css']
})
export class EmployeeComponentList {

    employees : IEmployee[];
    showNewEmployee : boolean = false;

    selectedEmployeeCountRadioButton: string = 'All';

    constructor(){
    this.employees = [
        {code: '101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '04/25/1984'},
        {code: '102', name: 'Andrew', gender: 'Male', annualSalary: 6500, dateOfBirth: '03/26/1985'},
        {code: '103', name: 'Kate', gender: 'Female', annualSalary: 6000, dateOfBirth: '02/27/1986'},
        {code: '104', name: 'Marry', gender: 'Female', annualSalary: 7000, dateOfBirth: '01/28/1987'}
    ]};

    toggleEmployees():void{
        this.showNewEmployee = !this.showNewEmployee;
        if (this.employees.length > 4 || this.employees.length < 1) {
            this.employees = [
                {code: '101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '04/25/1984'},
                {code: '102', name: 'Andrew', gender: 'Male', annualSalary: 6500, dateOfBirth: '03/26/1985'},
                {code: '103', name: 'Kate', gender: 'Female', annualSalary: 6000, dateOfBirth: '02/27/1986'},
                {code: '104', name: 'Marry', gender: 'Female', annualSalary: 7000, dateOfBirth: '01/28/1987'}
            ]
        }
        else {
            this.employees= [
                {code: '101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '04/25/1984'},
                {code: '102', name: 'Andrew', gender: 'Male', annualSalary: 6500, dateOfBirth: '03/26/1985'},
                {code: '103', name: 'Kate', gender: 'Female', annualSalary: 6000, dateOfBirth: '02/27/1986'},
                {code: '104', name: 'Marry', gender: 'Female', annualSalary: 7000, dateOfBirth: '01/28/1987'},
                {code: '105', name: 'Nancy', gender: 'Female', annualSalary: 7100, dateOfBirth: '01/09/1901'},
                {code: '106', name: 'Harry', gender: 'Male', annualSalary: 5400, dateOfBirth: '03/24/1983'},
            ]
        }
    };

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    getEmployeesCount(): number {
        return this.employees.length;
    }
    getMaleEmpoyeesCount(): number {
        return this.employees.filter(e=> e.gender ==="Male").length;     
    }

    getFemaleEmpoyeesCount(): number {
        return this.employees.filter(e=> e.gender ==="Female").length;
    }
}