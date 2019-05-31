import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OpenAppointmentSlot, Doctor } from 'src/app/shared/department.model';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';

@Component({
  selector: 'app-availableslot',
  templateUrl: './availableslot.component.html',
  styleUrls: ['./availableslot.component.css']
})
export class AvailableslotComponent {

  constructor(public dialogRef: MatDialogRef<AvailableslotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Doctor) {
    this.slotSelected = new OpenAppointmentSlot();
    this.slotSelected = this.data.OpenAppointmentSlots[0];
    this.slotList = this.data.OpenAppointmentSlots;
    this.doctor = this.data;

  }

  slotSelected: OpenAppointmentSlot;
  slotList: OpenAppointmentSlot[];
  doctor: Doctor;


  @ViewChild('calendar') calendar: MatCalendar<Moment>;

  selectedDate: Moment;

  close(): void{
    this.dialogRef.close();
  }

  // monthSelected(date) {
  //   alert(`Selected: ${date}`);
  // }

  // onDateChanged(date) {
  //   alert(`Selected: ${date}`);
  // }
}
