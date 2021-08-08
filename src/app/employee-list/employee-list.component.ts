import { Component, OnInit } from '@angular/core';
import { EmployeeService} from  '../employee.service';
import {Employee} from '../employee';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[] = [] ;

 

  constructor(private employeeService : EmployeeService , private router : Router)
   { 
     
   }

  ngOnInit(): void 
  {
    this.employeeService.getAllEmployee().subscribe((data : Employee[] ) =>
      {
          console.log(data);
          this.employees = data;
      }
      );
  }

  onClick(employee : Employee)
  {
    this.employeeService.employee = employee;
    this.router.navigate(['/updateemployee']);
  }

}
