import { Injectable } from '@angular/core';
import { Department } from './department.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  formData: Department;  

  constructor(private http : HttpClient) { }
    baseURL: string ='http://localhost:50610/api/';
    handleError: any ;

    //refreshList = new BehaviorSubject<boolean>(false);

    getDepartmentList(){
      return this.http.get<Department[]>(this.baseURL+'Departments');
    }

    getDepartmentById(id: number){
      return this.http.get<Department>(this.baseURL+'Departments/'+id);
    }

    deleteDepartmentById(id: number){
     
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  
      this.http.delete(this.baseURL+'Departments/'+id, options).subscribe(s => {
        console.log(s);
      });

      //this.refreshList.next(true);
      
    }
    
    addDepartment(Department: Department){
      
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
      this.http.post<Department>(this.baseURL+'Departments',Department,httpOptions)      
         .map(response => JSON.stringify(response))
        .catch(this.handleError)
        .subscribe(data => console.log(data),
        (error)=> console.log(error));
        }
    }
  