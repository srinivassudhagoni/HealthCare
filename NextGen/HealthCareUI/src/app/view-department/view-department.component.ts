import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../shared/department.service';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../shared/department.model';
@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  viewdept:Department;
  view:number;

  constructor(private departmentservice: DepartmentService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.viewdept = new Department();
    this.view = this.route.snapshot.params['Id'];
    if(this.view === undefined){ return; }
    this.departmentservice.getDepartmentById(this.view).subscribe((dept: Department)=>{
      this.viewdept = dept ;})
    }
    

  }
