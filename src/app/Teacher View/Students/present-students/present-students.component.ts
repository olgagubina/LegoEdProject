import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import Student from '../../../../models/student-model';
import { MatTableDataSource } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import PointItem from '../../../../models/point-model';



@Component({
  selector: 'app-present-students',
  templateUrl: './present-students.component.html',
  styleUrls: ['./present-students.component.css']
})

export class PresentStudentsComponent implements OnInit {
  displayedColumns = ['firstName', 'lastName', 'selectCat', 'selectPoint', 'submit'];
  allStudents: Student[];
  dataSource: MatTableDataSource<Student>;
  title: String;

  // for dynamic transaction input
  selectedCatId = new FormControl();
  selectedPointId: number;
  points: PointItem[];

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
