import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../shared/department.service';
import { Department } from '../shared/department.model';


@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
 _searchString: string;
  _departments: Department[];
  constructor(private Departmentservice: DepartmentService) { }
  get searchTerm():string{
    return this._searchString;
  }
  set searchTerm(value: string){
     this._searchString=value;
     this.onSearch(this._searchString);
  }

  ngOnInit() {

    this.getList();

    // this.Departmentservice.refreshList.subscribe(
    //   res => {
    //     this.getList();
    //   });
  }

      getList(){

        this.Departmentservice.getDepartmentList().subscribe((data: Department[]) => {
          this._departments = data;
            });
      }

       onSearch(searchString: string){

        this.Departmentservice.getList(searchString).subscribe((data: Department[]) => {
          this._departments = data;
            });
      }

      onDelete(id: number){

        this.Departmentservice.deleteDepartmentById(id).subscribe(()=>        
        this.getList()
        );
  }
  
}
