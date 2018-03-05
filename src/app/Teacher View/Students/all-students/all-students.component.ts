import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import Student from '../../../../models/student-model';
import {MatTableDataSource} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { StudentsViewService } from '../../../students-view.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})

export class AllStudentsComponent implements OnInit {
  displayedColumns = ['firstName', 'lastName', 'edit' ];
  allStudents: Student[];
  dataSource: MatTableDataSource<Student>;
  title: String;
  student: Student = new Student;

  constructor(private service: StudentsViewService, public dialog: MatDialog) { }

  ngOnInit() {
  // this.service.getStudents();
  this.title = 'Master List';
  this.allStudents = this.service.getStudents();
  this.dataSource = new MatTableDataSource(this.allStudents);
  }

  //ADD CUSTOMER
  openDialog(): void {
    let dialogRef = this.dialog.open(StudentFormDialogComponent, {
      width: '290px',
      data: {
        firstName: this.student.firstName,
        lastName: this.student.lastName,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      var newStudent = Object.assign({}, result);
      console.log(newStudent);

      //Add to data array on service
      this.service.addStudent(newStudent);

      //Clean the input
      this.student = new Student;
    });
  }
}
