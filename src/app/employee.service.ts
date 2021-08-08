import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee} from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl : string;

  public employee: Employee = {} as Employee;

  constructor( private http : HttpClient)
   { 
     this.apiUrl = "http://localhost:8080/api/employees";
     
   }

   public getAllEmployee() : Observable<Employee[]> 
   {
      return this.http.get<Employee[]>(this.apiUrl);
   }

   public updateEmployee(employee : Employee) : Observable<any>
   {
     let  updateURL : string = `${this.apiUrl}/${employee.employeeId}`;
      return this.http.put(updateURL , employee);
   }

  
}
