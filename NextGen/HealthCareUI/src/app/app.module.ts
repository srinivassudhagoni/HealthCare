import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DepartmentService } from './shared/department.service';
import {HttpClientModule} from '@angular/common/http';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { AppointmentComponent } from './appointment/appointment.component';




@NgModule({
  declarations: [
    AppComponent,
    ListDepartmentComponent,
    AddDepartmentComponent,
    ListDoctorComponent,
    AddDoctorComponent,
    ViewDoctorComponent,
    ViewDepartmentComponent,
    AppointmentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
