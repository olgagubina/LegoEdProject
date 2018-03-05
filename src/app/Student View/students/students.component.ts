import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../students-view.service';
import Student from '../../../models/student-model';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // students: any[];
  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() {
    // this.students = this.studentsViewService.getStudents();
    
  }

}
