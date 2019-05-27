import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../shared/department.service';
import { NgForm } from '@angular/forms';
import { Department } from '../shared/department.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  Department:Department;   

  constructor( private Departmentservice : DepartmentService, private route: ActivatedRoute,private location:Location) { }

  ngOnInit() {

this.Department = new Department();

 const deptId = this.route.snapshot.params['Id'];

 if(deptId === undefined) { return; }

this.Departmentservice.getDepartmentById(deptId)
.subscribe((data: Department) => {
this.Department = data; });
  }


  addDepartment(form:NgForm){
    
    this.Department=new Department();    
    this.Department.Id=form.value.Id;
    this.Department.Name=form.value.Name;
    
    this.Departmentservice.addDepartment(this.Department).subscribe(()=>this.goBack());
  }
  goBack(): void {
    this.location.back();
    }

}
