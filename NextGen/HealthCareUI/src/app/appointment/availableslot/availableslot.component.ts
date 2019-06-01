import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OpenAppointmentSlot, Doctor, Schedule } from 'src/app/shared/department.model';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-availableslot',
  templateUrl: './availableslot.component.html',
  styleUrls: ['./availableslot.component.css']
})
export class AvailableslotComponent {

  constructor(public dialogRef: MatDialogRef<AvailableslotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Doctor,
    private appointmentService: AppointmentService) {

    this.slotSelected = this.data.OpenAppointmentSlots[0].Id;
    this.slotList = this.data.OpenAppointmentSlots;
    this.doctor = this.data;
  }

  slotSelected: number;
  slotList: OpenAppointmentSlot[];
  doctor: Doctor;
  consultationDate: Date;
  appointmentDate: Date;
  visit: Schedule;

  @ViewChild('calendar') calendar: MatCalendar<Moment>;

  get selectedDate(): Date {
    return this.consultationDate;
  }

  set selectedDate(value: Date) {

    this.consultationDate = value;
    this.getSlotList();
  }

  getSlotList() {
    this.appointmentService.getOpenSlot(this.consultationDate, this.doctor.Id)
      .subscribe((data: Doctor[]) => {
        this.slotList = data[0].OpenAppointmentSlots;
      });
  }

  close(): void {
    this.dialogRef.close();
  }

  continue(): void {


    this.visit = { appointmentDate: this.consultationDate, slotId: this.slotSelected };
    //alert(this.visit.appointmentDate);

    this.dialogRef.close(this.visit);
  }

  // monthSelected(date) {
  //   alert(`Selected: ${date}`);
  // }

  // onDateChanged(date) {
  //   alert(`Selected: ${date}`);
  // }
}


