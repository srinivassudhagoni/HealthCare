import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/doctor.service';
import { AppointmentService } from '../shared/appointment.service';
import { Department, Patient, Doctor, OpenAppointmentSlot, Schedule } from '../shared/department.model';
import { Appointment } from '../shared/get-list-by-department-request.model';




@Component({
  selector: 'app-doc-appointment',
  templateUrl: './doc-appointment.component.html',
  styleUrls: ['./doc-appointment.component.css']
})
export class DocAppointmentComponent implements OnInit {
  
  doctorList: Doctor[];
  DefaultDoctor: number;
  appointmentList: Appointment[];


  constructor(
    private appointmentService: AppointmentService,
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
    this.getDoctorList();
  }

  getDoctorList() {

    this.doctorService.getList()
      .subscribe((doctors: Doctor[]) => {
        this.doctorList = doctors;
        this.DefaultDoctor = this.doctorList[0].Id ;
      });
    } 

  getAppointmentList() {

    this.appointmentService.getListByDoctor(this.DefaultDoctor)
      .subscribe((appointments: Appointment[]) => {
        this.appointmentList = appointments;
      });

}
}
