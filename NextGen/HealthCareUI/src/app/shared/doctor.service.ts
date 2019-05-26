import { Injectable } from '@angular/core';
import { Doctor,GetListRequest } from './department.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {}
  baseURL: string = 'http://localhost:50610/api/Doctor/';
  handleError: any ;
  request : GetListRequest;

  getList(){
    return this.http.get<Doctor[]>(this.baseURL+'GetList');
  }

  getById(id: number){
    return this.http.get<Doctor>(this.baseURL+'Get/'+ id);
  }

  addDoctor(doctor: Doctor){
    const options = { headers: new HttpHeaders({
      'content-type':'application/json'})
  };
   return this.http.post<Doctor>(this.baseURL+'Persist',doctor,options);
  };

  deleteById(id: number){
    const options = {
      headers: new HttpHeaders({
        'content-type':'application/json'})
    };
    return this.http.delete(this.baseURL +'DeleteDepartment/'+ id,options);
  };

  searchList(searchString: string){
    this.request= new GetListRequest();
    this.request.SearchString = searchString;
     const options={headers : new HttpHeaders({
       'content-type':'application/json'})
      };
    return this.http.post<Doctor[]>(this.baseURL +'GetFilteredList',this.request,options)
    }




}
