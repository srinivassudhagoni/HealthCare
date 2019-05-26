import { Injectable } from '@angular/core';
import { Department, GetListRequest } from './department.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  

  constructor(private http: HttpClient) { }
    baseURL = 'http://localhost:50610/api/Departments/';
    handleError: any ;
    request : GetListRequest;

    // refreshList = new BehaviorSubject<boolean>(false);

    getDepartmentList() {
      return this.http.get<Department[]>(this.baseURL + 'GetList');
    }

    getDepartmentById(id: number) {
      return this.http.get<Department>(this.baseURL + 'Get/' + id);
    }

    deleteDepartmentById(id: number) {

      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      return this.http.delete(this.baseURL + 'DeleteDepartment/' + id, options)
      }

      // this.refreshList.next(true);

      getList(searchString : string)
      {        
        this.request = new GetListRequest();
        this.request.SearchString = searchString;

        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
        return  this.http.post<Department[]>(this.baseURL + 'GetFilteredList', this.request, options)
      }

    

   addDepartment(Department: Department){

      const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
       return  this.http.post<Department>(this.baseURL + 'Persist', Department, options)
        };
       
      }