import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-update-form',
  templateUrl: './employee-update-form.component.html',
  styleUrls: ['./employee-update-form.component.css']
})
export class EmployeeUpdateFormComponent implements OnInit {

  private employee : Employee ; 

  updateForm : FormGroup = new FormGroup({});

  constructor(private employeeService : EmployeeService , private router : Router)
   {
        this.employee = employeeService.employee;
    }

  ngOnInit(): void
   {
    this.updateForm = new FormGroup({

        employeeId :new FormControl(this.employee.employeeId),
        employeeName : new FormControl(this.employee.employeeName),
        employeeEmail : new FormControl(this.employee.employeeEmail),
        employeeLocation :new FormControl(this.employee.employeeLocation)

      })
  }

  onSubmit()
  {
    this.employeeService.updateEmployee(this.updateForm.value).subscribe(()=> {
        this.router.navigate(['/']);
    });
  }

}
