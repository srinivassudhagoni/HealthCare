import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../shared/department.service';
import { Department } from '../shared/department.model';


@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

  Departments: Department[];
  constructor(private Departmentservice: DepartmentService) { }

  ngOnInit() {

    this.getList();

    // this.Departmentservice.refreshList.subscribe(
    //   res => {
    //     this.getList();
    //   });
  }

      getList(){

        this.Departmentservice.getDepartmentList().subscribe((data: Department[]) => {
          this.Departments = data;
            });
      }

      onDelete(id: number){

        this.Departmentservice.deleteDepartmentById(id).subscribe(()=>        
        this.getList()
        );
  }
  
}
