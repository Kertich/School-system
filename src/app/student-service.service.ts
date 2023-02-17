import { Injectable } from '@angular/core';
import { Student } from './sm-student-list/sm-student-list.component'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private students: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }

  removeStudent(student: Student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }

  updateStudent(student: Student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students[index] = student;
    }
  }

  getStudents(): Student[] {
    return this.students;
  }

  // constructor() { }
}
