import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';


export const routes: Routes = [
  {path:'',component:ListDepartmentComponent, pathMatch:'full'},
  {path:'list-department',component:ListDepartmentComponent},
  {path:'add-department',component:AddDepartmentComponent},
  {path:'add-department/:Id',component:AddDepartmentComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
