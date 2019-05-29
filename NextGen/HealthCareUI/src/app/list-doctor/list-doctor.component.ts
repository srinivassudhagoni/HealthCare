import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/doctor.service';
import { Doctor } from '../shared/department.model';


@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
  Doctors: Doctor[];
  _searchString: string;

  constructor(private _doctorService: DoctorService) { }

  get searchTerm(): string {
    return this._searchString;
  }
  set searchTerm(value: string) {
    this._searchString = value;
    this.searchList(this._searchString);
  }

  searchList(searchString: string) {
    this._doctorService.searchList(searchString).subscribe((search: Doctor[]) => this.Doctors = search);
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this._doctorService.getList().subscribe((data: Doctor[]) => { this.Doctors = data });
  }

  onDelete(Id: number) {
    alert(Id);
    this._doctorService.deleteById(Id).subscribe(() => this.getList());
  }

}
