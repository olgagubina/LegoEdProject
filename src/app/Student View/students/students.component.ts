import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../students-view.service';

import Student from '../../../models/student-model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  constructor(private service: StudentsViewService) { }

  ngOnInit() {
    this.service.presentStudentsData$.subscribe(
      data => {
        this.students = data;
      },
      error => {
        console.error(error);
      }
    );
    this.service.getPresentStudents();
  }
}
