import { Injectable } from '@angular/core';
import { PersistAppointmentRequest, Appointment, GetListByDepartmentRequest } from './get-list-by-department-request.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Doctor } from './department.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  GetListByDepartmentRequest: GetListByDepartmentRequest;

  constructor(private http: HttpClient) { }
  baseURL: string = 'http://localhost:50610/api/Appointment/';
  request: PersistAppointmentRequest;
  
  saveAppoitment(appointment: Appointment) {
    const options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    this.request = new PersistAppointmentRequest();
    this.request.Appointment= appointment;

    return this.http.post<Appointment>(this.baseURL + 'Persist',this.request, options);
  };

  getDoctorListByDepartment(departmentId: number) {

    this.GetListByDepartmentRequest = new GetListByDepartmentRequest();
    this.GetListByDepartmentRequest.DepartmentId = departmentId;

    const options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post<Doctor[]>(this.baseURL + 'GetDoctorListByDepartment', this.GetListByDepartmentRequest, options);
  }

}
