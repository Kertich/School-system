import { Component, OnInit } from '@angular/core';
import { Student } from '../sm-dd-student/sm-dd-student.component';

import { StudentService } from '../student-service.service'


@Component({
  selector: 'app-sm-student-list',
  templateUrl: './sm-student-list.component.html',
  styleUrls: ['./sm-student-list.component.css']
})
export class SmStudentListComponent implements OnInit {

  
  students: Student[] = [
    // { name: 'John', balance: 500, details: 'Class A' },
    // { name: 'Jane', balance: 0, details: 'Class B' },
    // { name: 'Mark', balance: 200, details: 'Class C' },
    // { name: 'Mary', balance: 0, details: 'Class A' }
  ];
  balanceFilter = '';

 constructor(private studentService: StudentService) { }

 ngOnInit() {
   this.students = this.studentService.getStudents();
   console.log(this.students);
   
 }

 addStudent(student: Student) {
   this.studentService.addStudent(student);
   this.students = this.studentService.getStudents();
 }

 removeStudent(student: Student) {
   this.studentService.removeStudent(student);
   this.students = this.studentService.getStudents();
 }

 updateStudent(student: Student) {
   this.studentService.updateStudent(student);
   this.students = this.studentService.getStudents();
 }

 

updateBalance(student: Student) {
  const balanceString = prompt('Enter new balance:');
  if (balanceString !== null) {
    const newBalance = parseInt(balanceString, 10);
    student.balance = newBalance;
  }
}
}


    
