import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import Student from '../../../../models/student-model';
import {MatTableDataSource} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})

export class AllStudentsComponent implements OnInit {
  displayedColumns = [ 'present', 'firstName', 'lastName', 'edit', 'delete' ];
  allStudents: Student[];
  dataSource: MatTableDataSource<Student>;
  title: String;

  constructor(private service: StudentsViewService) { }

  ngOnInit() {
  // this.service.getStudents();
  this.title = 'Master List';
  this.allStudents = this.service.getStudents();
  this.dataSource = new MatTableDataSource(this.allStudents);
  }
}

