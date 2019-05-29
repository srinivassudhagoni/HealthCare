import { Component, OnInit } from '@angular/core';
import { ResourceType, Doctor, Department } from '../shared/department.model';
import { DoctorService } from '../shared/doctor.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService } from '../shared/department.service';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  doctor: Doctor;
  ResourceTypeList: ResourceType[];
  _resource: ResourceType;
  resourceGroup: ResourceType;
  DefaultDepartment: Department;
  DepartmentList: Department[];

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private location: Location,
    private departmentService: DepartmentService) { }

  ngOnInit() {
    this.doctor = new Doctor();
    this.DefaultDepartment = new Department();
    this.getResourceTypeList();
    const docId = this.route.snapshot.params['Id'];
    this.getDepartmentList();

    if (docId === undefined) { return; }

    this.doctorService.getById(docId).subscribe(
      (data: Doctor) => {
        this.doctor = data;
        this.resourceGroup = this.doctor.ResourceType;
      });
  }

  getDepartmentList() {

    this.departmentService.getDepartmentList()
      .subscribe((deptList: Department[]) => {
        this.DepartmentList = deptList;
      });
  }



  addDoctor(form: NgForm) {
    this.doctor = new Doctor();

    this.doctor.Id = form.value.Id;
    this.doctor.FirstName = form.value.FirstName;
    this.doctor.LastName = form.value.LastName;
    this.doctor.SpecializedIn = form.value.SpecializedIn;
    this.doctor.ResourceTypeId = this.resourceGroup.Id;
    this.doctor.DepartmentId = this.DefaultDepartment.Id;
    this.doctorService.addDoctor(this.doctor).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getResourceTypeList() {
    this.ResourceTypeList = [];
    this._resource = new ResourceType();
    this._resource.Id = 1;
    this._resource.Name = "Full time";
    this.ResourceTypeList.push(this._resource);

    this._resource = new ResourceType();
    this._resource.Id = 2;
    this._resource.Name = "Part time";
    this.ResourceTypeList.push(this._resource);
  }


}
