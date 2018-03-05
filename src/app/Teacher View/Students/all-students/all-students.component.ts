import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import Student from '../../../../models/student-model';
import {MatTableDataSource} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';


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

  constructor(
    private service: StudentsViewService, 
    public dialog: MatDialog) { }

  ngOnInit() {
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
        lastName: this.student.lastName
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

