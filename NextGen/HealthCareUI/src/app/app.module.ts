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


@NgModule({
  declarations: [
    AppComponent,
    ListDepartmentComponent,
    AddDepartmentComponent
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
