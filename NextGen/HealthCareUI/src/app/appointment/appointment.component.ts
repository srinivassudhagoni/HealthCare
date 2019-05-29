import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Department, Patient, Doctor } from '../shared/department.model';
import { DepartmentService } from '../shared/department.service';
import { DoctorService } from '../shared/doctor.service';
import { Appointment, CreditCardPayment } from '../shared/get-list-by-department-request.model'
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  DefaultDepartment: number;
  DepartmentList: Department[];
  patient: Patient;
  doctorList: Doctor[];
  consultingDoctorId: number;
  firstFromGroup: FormGroup;
  secondFromGroup: FormGroup;
  thirdFromGroup: FormGroup;
  consultationDate: Date;
  appointment: Appointment;
  payment: CreditCardPayment;

  constructor(private departmentService: DepartmentService,
    private doctorService: DoctorService,
    private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.patient = new Patient();
    this.appointment = new Appointment();
    this.payment = new CreditCardPayment();

    this.getDepartmentList();
    this.getDoctorList();
  }

  getDepartmentList() {

    this.departmentService.getDepartmentList()
      .subscribe((dept: Department[]) => {
        this.DepartmentList = dept;
        this.DefaultDepartment = this.DepartmentList[0].Id;
      });
  }

  getDoctorList() {

    this.doctorService.getListByDepartment(this.DefaultDepartment)
      .subscribe((doctors: Doctor[]) => {
        this.doctorList = doctors;
      });
  }

  saveAppointment() {
   
    this.appointment.ConsultationTime = this.consultationDate;
    this.appointment.DoctorId = this.consultingDoctorId;
    this.appointment.Patient = new Patient();
    this.appointment.CreditCardPayment = new CreditCardPayment();

    this.appointment.Patient.FirstName = this.patient.FirstName;
    this.appointment.Patient.LasttName = this.patient.LasttName;
    this.appointment.Patient.Email = this.patient.Email;
    this.appointment.Patient.MobileNumber = this.patient.MobileNumber;
    this.appointment.Patient.AddressLine1 = this.patient.AddressLine1;
    this.appointment.Patient.AddressLine2 = this.patient.AddressLine2;
    this.appointment.Patient.City = this.patient.City;
    this.appointment.Patient.State = this.patient.State;
    this.appointment.Patient.Country = this.patient.Country;
   

    this.appointment.CreditCardPayment.CardNumber = this.payment.CardNumber;
    this.appointment.CreditCardPayment.ExpirationDate = this.payment.ExpirationDate;
    this.appointment.CreditCardPayment.CustomerName = this.payment.CustomerName;
    this.appointment.CreditCardPayment.CVV = this.payment.CVV;   

    this.appointmentService.saveAppoitment(this.appointment).subscribe(() => { alert('Saved'); });

  }


}
