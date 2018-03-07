import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../students-view.service';
import { Observable } from 'rxjs/Observable';

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
        this.subscribeToData();
      },
      error => {
        console.error(error);
      }
    );
    this.service.getPresentStudents();
  }

  private subscribeToData(): void {
    var service = this.service
    setInterval(function(){
      service.getPresentStudents(); 
    }, 7000);
  }
}
