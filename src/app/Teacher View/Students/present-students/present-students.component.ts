import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import Student from '../../../../models/student-model';
import {MatTableDataSource} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-present-students',
  templateUrl: './present-students.component.html',
  styleUrls: ['./present-students.component.css']
})
export class PresentStudentsComponent implements OnInit {
  displayedColumns = ['firstName', 'lastName', 'dropdown-type', 'edit' ];
  allStudents: Student[];
  dataSource: MatTableDataSource<Student>;
  title: String;

  constructor(private service: StudentsViewService) { }

  ngOnInit() {
    this.title = 'Present Students';
    this.service.presentStudentsData$.subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      },
      error => {
        console.error(error);
      }
    );
    this.service.getPresentStudents();
  }
}
