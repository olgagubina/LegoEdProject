import { Component, OnInit } from "@angular/core";
import { StudentsViewService } from "../../../students-view.service";
import Student from "../../../../models/student-model";
import { MatTableDataSource } from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SelectionModel } from "@angular/cdk/collections";
import { StudentFormDialogComponent } from "../student-form-dialog/student-form-dialog.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: "app-all-students",
  templateUrl: "./all-students.component.html",
  styleUrls: ["./all-students.component.css"]
})
export class AllStudentsComponent implements OnInit {
  displayedColumns = ['present', 'firstName', 'lastName', 'edit'];
  color = 'accent';
  disabled = false;
  allStudents: Student[];
  dataSource: MatTableDataSource<Student>;
  title: String;
  changedStudent: Student = new Student();
  // selection = new SelectionModel<Student>(false, []);

  constructor(private service: StudentsViewService, public dialog: MatDialog) {}

  ngOnInit() {
    this.title = 'Master List';
    // this.allStudents = this.service.students;
    this.service.studentsData$.subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      },
      error => {
        console.error(error);
      }
    );
    this.service.getStudents();
  }

  // Mark student present

  markPresent(student) {
  //   if (student.present === 0) {
  //       student.present = 1;
        // this.checked = false;
  //   } else {
  //     student.present = 0;
  // }
    this.service.studentPresent(student).subscribe(data => {
      this.service.getPresentStudents();
      this.service.getStudents();
    });
  }

  // ADD CUSTOMER
  openDialog(): void {
    let dialogRef = this.dialog.open(StudentFormDialogComponent, {
      width: "290px",
      data: {
        firstName: this.changedStudent.firstName,
        lastName: this.changedStudent.lastName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      var newStudent = Object.assign({}, result);
      console.log(newStudent);

      // Add to data array on service
      if (result) {
        this.service
          .addStudent(newStudent)
          .subscribe(data => this.service.getStudents());
      }

      // Clean the input
      this.changedStudent = new Student();
    });
  }

}
