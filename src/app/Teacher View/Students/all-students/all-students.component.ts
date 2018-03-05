import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsViewService } from '../../../students-view.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';
import Student from '../../../../models/student-model'


@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})

export class AllStudentsComponent implements OnInit {
  student: Student = new Student;

  constructor(private dataService: StudentsViewService, public dialog: MatDialog) { }

  ngOnInit() {
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
      this.dataService.addStudent(newStudent);

      //Clean the input
      this.student = new Student;
    });
  }

}
