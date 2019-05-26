import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/doctor.service';
import { Doctor } from '../shared/department.model';


@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
  Doctors:Doctor[];

  constructor(private _doctorService: DoctorService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this._doctorService.getList().subscribe((data: Doctor[]) => {this.Doctors= data});
  }

}
