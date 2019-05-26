import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';


export const routes: Routes = [
  {path:'',component:ListDepartmentComponent, pathMatch:'full'},
  {path:'list-department',component:ListDepartmentComponent},
  {path:'add-department',component:AddDepartmentComponent},
  {path:'add-department/:Id',component:AddDepartmentComponent},
  {path:'list-doctor',component:ListDoctorComponent},
  {path:'add-doctor',component:AddDoctorComponent},
  {path:'add-doctor/:Id',component:AddDoctorComponent},
  {path:'view-doctor/:Id',component:ViewDoctorComponent},
  {path:'view-department/:Id',component:ViewDepartmentComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
