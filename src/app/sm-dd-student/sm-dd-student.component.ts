import { Component } from '@angular/core';

export interface Student {
  name: string;
  balance: number;
  details: string;
}

@Component({
  selector: 'app-sm-dd-student',
  templateUrl: './sm-dd-student.component.html',
  styleUrls: ['./sm-dd-student.component.css']
})
export class SmDdStudentComponent {

  student: Student = {
    name: '',
    balance: 0,
    details: ''
  };
  students: Student[] = [];
  balanceFilter = '';
  addStudent() {
    this.students.push(this.student);
    this.student = {
      name: '',
      balance: 0,
      details: ''
    };
}

updateBalance(student: Student) {
  const balanceString = prompt('Enter new balance:');
  if (balanceString !== null) {
    const newBalance = parseInt(balanceString, 10);
    student.balance = newBalance;
  }
}
}