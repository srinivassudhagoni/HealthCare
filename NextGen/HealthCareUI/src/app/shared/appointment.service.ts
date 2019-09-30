import { Injectable } from '@angular/core';
import { PersistAppointmentRequest, Appointment, GetListByDepartmentRequest, GetAppointmentSlotListRequest, GetListByDoctorRequest } from './get-list-by-department-request.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Doctor, OpenAppointmentSlot } from './department.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  GetListByDepartmentRequest: GetListByDepartmentRequest;
  GetAppointmentSlotListRequest: GetAppointmentSlotListRequest;
  GetListByDoctorRequest: GetListByDoctorRequest;

  constructor(private http: HttpClient) { }
  baseURL = 'http://localhost:50610/api/Appointment/';
  request: PersistAppointmentRequest;

  saveAppoitment(appointment: Appointment) {
    const options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    this.request = new PersistAppointmentRequest();
    this.request.Appointment = appointment;

    return this.http.post<Appointment>(this.baseURL + 'Persist', this.request, options);
  };

  getOpenSlot(appointmentDate: Date, doctorId: number) {

    this.GetAppointmentSlotListRequest = new GetAppointmentSlotListRequest();
    this.GetAppointmentSlotListRequest.DoctorId = doctorId;
    this.GetAppointmentSlotListRequest.AppointmentDate = appointmentDate;

    const options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post<Doctor[]>(this.baseURL + 'GetAppointmentSlotList', this.GetAppointmentSlotListRequest, options);
  }



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

  getListByDoctor(doctorId: number) {

    this.GetListByDoctorRequest = new GetListByDoctorRequest();
    this.GetListByDoctorRequest.DoctorId = doctorId;

    const options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post<Appointment[]>(this.baseURL + 'GetListByDoctor', this.GetListByDoctorRequest, options);
  }

  getAppointmentSlotList(doctorId: number) {

    this.GetAppointmentSlotListRequest = new GetAppointmentSlotListRequest();
    this.GetAppointmentSlotListRequest.DoctorId = doctorId;

    const options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post<Appointment[]>(this.baseURL + 'GetAppointmentSlotList', this.GetAppointmentSlotListRequest, options);
  }


}
