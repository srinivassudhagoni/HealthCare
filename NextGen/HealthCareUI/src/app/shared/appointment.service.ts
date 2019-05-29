import { Injectable } from '@angular/core';
import { PersistAppointmentRequest, Appointment } from './get-list-by-department-request.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

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

}
