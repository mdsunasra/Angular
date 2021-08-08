import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateFormComponent } from './employee-update-form/employee-update-form.component';

const routes: Routes = [

    {path : 'updateemployee' , component : EmployeeUpdateFormComponent},
    {path : '' , component : EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
