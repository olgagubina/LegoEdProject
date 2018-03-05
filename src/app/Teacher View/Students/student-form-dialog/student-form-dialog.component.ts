import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import Student  from '../../../../models/student-model';

@Component({
  selector: 'app-student-form-dialog',
  templateUrl: './student-form-dialog.component.html',
  styleUrls: ['./student-form-dialog.component.css']
})
export class StudentFormDialogComponent implements OnInit {
  

  constructor(public dialogRef: MatDialogRef<StudentFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //For parent comp html
  //Add button - mat-raised-button (click)="openDialog()

}
