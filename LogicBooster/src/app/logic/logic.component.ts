import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Doctor, Test, Student, Patient } from '../shared/logic.model';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent implements OnInit {
  numberList: number[];
  searchNumber: number;
  doctorName: string;
  test: Test;
  patientList: Patient[];
  foundNumber: number;
  doctorList: Doctor[];
  studentList: Student[];
  searchStudent: string;
  studentName: string;

  constructor() {
  }
  ngOnInit() {
    this.test = new Test();
    this.numberList = [11, 14, 12];
    this.test.searchNumber = 4;
    // this.evenNumber();
    // this.findDoctor();
    this.doctorData();
    // this.findBigNumber();
     // this.sentence();
    // this.studentMarks();
    //this.patientData();
  }

  // Find Doctor whose name is : Hemant

  // doctorData(){
  //   this.doctorList = [{ Id: 1, Name: 'Ravi', Department: 'Caridilogy', Rating: 4, Experience: 5 },
  //   { Id: 2, Name: 'Hemant', Department: 'General', Rating: 5, Experience: 10 },
  //   { Id: 3, Name: 'Rajeshekhar', Department: 'Neuro', Rating: 4, Experience: 8 },
  //   { Id: 4, Name: 'Arjun', Department: 'Ortho', Rating: 3, Experience: 10 },
  //   { Id: 5, Name: 'Siva', Department: 'Ortho', Rating: 4, Experience: 6 },
  //   { Id: 6, Name: 'Dev', Department: 'General', Rating: 5, Experience: 3 }];
  //   let Doctor = this.doctorList.find(x => x.Name ==='Hemant');
  //   for(let i in Doctor){
  //     console.log(Doctor[i]);
  //   }
  // }

  // Find list of Doctor who belongs to Ortho Department

  // doctorData() {
  //   this.doctorList = [{ Id: 1, Name: 'Ravi', Department: 'Caridilogy', Rating: 4, Experience: 5 },
  //   { Id: 2, Name: 'Hemant', Department: 'General', Rating: 5, Experience: 10 },
  //   { Id: 3, Name: 'Rajeshekhar', Department: 'Neuro', Rating: 4, Experience: 8 },
  //   { Id: 4, Name: 'Arjun', Department: 'Ortho', Rating: 3, Experience: 10 },
  //   { Id: 5, Name: 'Siva', Department: 'Ortho', Rating: 4, Experience: 6 },
  //   { Id: 6, Name: 'Dev', Department: 'General', Rating: 5, Experience: 3 }];
  //   let Doctor = this.doctorList.filter(x => x.Department === 'Ortho');
  //   for (const i in Doctor) {
  //     console.log(Doctor[i].Name);
  //   }
  // }

  // Find list of Doctors whose experience is between 7-10

  // doctorData() {
  //   this.doctorList = [{ Id: 1, Name: 'Ravi', Department: 'Caridilogy', Rating: 4, Experience: 5 },
  //   { Id: 2, Name: 'Hemant', Department: 'General', Rating: 5, Experience: 10 },
  //   { Id: 3, Name: 'Rajeshekhar', Department: 'Neuro', Rating: 4, Experience: 8 },
  //   { Id: 4, Name: 'Arjun', Department: 'Ortho', Rating: 3, Experience: 10 },
  //   { Id: 5, Name: 'Siva', Department: 'Ortho', Rating: 4, Experience: 6 },
  //   { Id: 6, Name: 'Dev', Department: 'General', Rating: 5, Experience: 3 }];
  //   let Doctor = this.doctorList.filter(x => x.Experience > 6 && x.Experience < 11);
  //   for (const i in Doctor) {
  //     console.log(Doctor[i].Name);
  //   }
  // }

 // Find list of doctors whose experience is between 7-10 and Rating is 4 or 5

//  doctorData() {
//   this.doctorList = [
//   { Id: 1, Name: 'Ravi', Department: 'Caridilogy', Rating: 4, Experience: 9 },
//   { Id: 2, Name: 'Hemant', Department: 'General', Rating: 5, Experience: 10 },
//   { Id: 3, Name: 'Rajeshekhar', Department: 'Neuro', Rating: 4, Experience: 8 },
//   { Id: 4, Name: 'Arjun', Department: 'Ortho', Rating: 3, Experience: 10 },
//   { Id: 5, Name: 'Siva', Department: 'Ortho', Rating: 4, Experience: 6 },
//   { Id: 6, Name: 'Dev', Department: 'General', Rating: 5, Experience: 3 }];
//   let Doctor = this.doctorList.filter(x => x.Experience > 6 && x.Experience < 11 && (x.Rating === 4 || x.Rating === 5) ) ;
//   for (const i in Doctor) {
//     console.log(Doctor[i].Name);
//   }
// }

// Find the doctor who has best rating in ortho department

doctorData() {
  this.doctorList = [{ Id: 1, Name: 'Ravi', Department: 'Caridilogy', Rating: 4, Experience: 5 },
  { Id: 2, Name: 'Hemant', Department: 'General', Rating: 5, Experience: 10 },
  { Id: 3, Name: 'Rajeshekhar', Department: 'Neuro', Rating: 4, Experience: 8 },
  { Id: 4, Name: 'Arjun', Department: 'Ortho', Rating: 3, Experience: 10 },
  { Id: 4, Name: 'krishna', Department: 'Ortho', Rating: 5, Experience: 10 },
  { Id: 5, Name: 'Siva', Department: 'Ortho', Rating: 8, Experience: 6 },
  { Id: 6, Name: 'Dev', Department: 'General', Rating: 5, Experience: 3 }];
  let filteredList = this.doctorList.filter(x => x.Department === 'Ortho');
  this.doctorList = this.doctorList.filter(x => x.Department === 'Ortho').sort(x => x.Rating);
  let resultDoctor = filteredList[0] ;
  let i : number;
  for ( i = 1; i < filteredList.length; i++) {
    if(resultDoctor.Rating < filteredList[i].Rating){
     resultDoctor = filteredList[i];
  }
  }
  console.log(resultDoctor.Name);
}



// find patient details by Id

  patientData() {
    this.patientList = [{Id: 1, Name: 'Mukesh'},
  {Id: 2, Name: 'Suresh'}, {Id: 3, Name: 'Ramesh'}, {Id: 4, Name: 'Naresh'}];
    const Patient = this.patientList.filter(x => x.Id == 4);
  for (const i in Patient) {
    console.log(Patient[i].Name);
  }
}

// Find studentlist who passed

  studentMarks() {
    this.studentList = [{ Id: 1, Name: 'Mohan', Passed: true, Marks: 150 },
    { Id: 2, Name: 'Rohan', Passed: false, Marks: 80 },
    { Id: 3, Name: 'Raman', Passed: true, Marks: 350 },
    { Id: 4, Name: 'Jeevan', Passed: false, Marks: 103 },
    { Id: 5, Name: 'Michael', Passed: true, Marks: 250 }];

    const student = this.studentList.filter(x => x.Marks > 100 && x.Passed === false);
    // let student = this.studentList.filter(x => x.Name );
    for (const i in student) {
    console.log(student[i].Name); // studentName >100 marks
    }
  }

// findDoctor Method with data

//  findDoctor() {
//     this.doctorList = [{ Id: 1, Name: 'Ravi', Department: 'Caridilogy', Rating: 4, Experience: 5 },
//     { Id: 2, Name: 'Hemant', Department: 'General', Rating: 5, Experience: 10 },
//     { Id: 3, Name: 'Rajeshekhar', Department: 'Neuro', Rating: 4, Experience: 8 },
//     { Id: 4, Name: 'Arjun', Department: 'Ortho', Rating: 3, Experience: 10 },
//     { Id: 5, Name: 'Siva', Department: 'Ortho', Rating: 4, Experience: 6 },
//     { Id: 6, Name: 'Dev', Department: 'General', Rating: 5, Experience: 3 }];

//     //let orthoList = this.doctorList.filter(x => x.Department === this.test.doctorName && (x.Rating > 3 || x.Experience > 5));
// tslint:disable-next-line: max-line-length
//     let orthoList = this.doctorList.filter(x => x.Department === this.test.doctorName && x.Experience > 2 && (x.Rating > 3 || x.Experience >5));
//     for (let j in orthoList) {
//       console.log(orthoList[j].Name);
//     }
//   }



  findNumber() {
    this.foundNumber = this.numberList.filter(x => x === this.test.searchNumber)[0];

    this.foundNumber = this.numberList.find(x => x === this.test.searchNumber);

    if (this.foundNumber !== undefined) {
      alert(this.test.searchNumber + 'found' + this.foundNumber);

    } else {
      alert(this.test.searchNumber + 'not found');

    }
  }

  evenNumber() {

    const evenList = this.numberList.filter(x => x % 2 === 0);

    const even = this.numberList.find(x => x % 2 === 0);
    for (const i in evenList) {
      console.log(evenList[i] + ' byFilter');
    }

    console.log(even + ' byFind');

    // if (this.numberList[i] % 2 == 0) {
    //   console.log(this.numberList[i] + 'even');
    // }
    // else {
    //   console.log(this.numberList[i] + 'odd');
    // }
  }

  // find greater number of all given numbers

  findBigNumber() {
    const numList = [2, 8, 6, 7, 9, 0];
    let temp: number = numList[0];
    for (const i in numList) {
      if (numList[i] < temp) {
        temp = numList[i];
      }
    }
    console.log(temp);
  }

  sentence() {
    const fullName = `Bob Bobbington`;
    const age = 37;
    const greeting = `Hello, my name is ${fullName}.
    I'll be ${ age + 1} years old next month.`;
    console.log(greeting);
  }

}


// Get even and odd number from array

// let list: number[] = [1, 2, 3, 4, 6, 8];
// for (let i in list) {
//   if (list[i] % 2 == 0) {
//     console.log(list[i]);
//     console.log(list[i] + 'even');
//   }
//   else {
//     console.log(list[i] + 'odd');
//   }
// }


// let x = 10; let y = 23;
// let z = x + y;
// console.log(z);
// for (let i = 0; i < 10; i++) {
//   setTimeout(function () { console.log(i); }, 100 * i);
// }


