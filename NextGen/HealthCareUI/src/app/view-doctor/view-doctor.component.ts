import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../shared/department.model';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {
doctorId:number;
viewdoctor : Doctor;
  constructor(private doctorService: DoctorService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.viewdoctor = new Doctor();
    this.doctorId=this.route.snapshot.params['Id'];
    if(this.doctorId === undefined){return;}
     this.doctorService.getById(this.doctorId).subscribe((doctor:Doctor)=>{
      this.viewdoctor=doctor;
     });

    
  }

}
