import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VALID } from '@angular/forms/src/model';
import { StudentsViewService } from '../../../students-view.service';
import { TransactionPopupComponent } from '../../transaction-popup/transaction-popup.component';
import Student from '../../../../models/student-model';
import PointItem from '../../../../models/point-model';

@Component({
  selector: 'app-present-students',
  templateUrl: './present-students.component.html',
  styleUrls: ['./present-students.component.css']
})

export class PresentStudentsComponent implements OnInit {
  transactionForm: FormGroup;
  allPoints: PointItem[];
  pointsAfterChangeEvent: any[] = [];

  displayedColumns = ['firstName', 'lastName', 'form'];
  allStudents: Student[];
  dataSource: MatTableDataSource<Student>;
  title: String;

  constructor(
    private service: StudentsViewService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { this.createForm(); }

  ngOnInit() {
    this.title = 'Present Students';
    // get list of present students
    this.service.presentStudentsData$.subscribe(
      data => { this.dataSource = new MatTableDataSource(data); },
      error => { console.error(error); });
    this.service.getPresentStudents();
    // get list of all points for display
    this.service.displayPointsData$.subscribe(
      data => this.allPoints = data
    );
    this.service.getDisplayedPoints();
  }

  createForm() {
    this.transactionForm = this.fb.group({
      selectedCatId: [null, Validators.required],
      selectedPointId: [null, Validators.required],
      comment: ''
    });
  }

  // Rebuild the point list every time the category changes.
  typeChanged() {
    const selCatId = this.transactionForm.get('selectedCatId').value;
    this.pointsAfterChangeEvent = this.allPoints.filter(p => p.catId == selCatId);
  }

  submitForm(stId) {
    if (this.transactionForm.status == 'INVALID') {
      console.log('transactionForm.status ', this.transactionForm.status);
      this.openFeedbackDialog(`NOT saved: input incorrect.`);
      return
    };
    let newTrans = {
      studentId: Number(stId),
      pointId: Number(this.transactionForm.value.selectedPointId),
      comment: this.transactionForm.value.comment
    };
    this.service.saveTransaction(newTrans).subscribe(data => {
      console.log('transaction saved');
      this.openFeedbackDialog('Transaction saved');
    },
      error => {
        console.error(error);
        this.openFeedbackDialog('Oops, transaction not saved. Something went wrong :(');
      });
  }

  clearInput() {
    this.transactionForm = this.fb.group({
      selectedCatId: [null, Validators.required],
      selectedPointId: [null, Validators.required],
      comment: ''
    })
  }

  // POP-UP as feedback on submit transaction
  openFeedbackDialog(text): void {
    let dialogRef = this.dialog.open(TransactionPopupComponent, {
      width: '310px',
      data: {
        text: text
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.transactionForm = this.fb.group({
        selectedCatId: [null, Validators.required],
        selectedPointId: [null, Validators.required],
        comment: ''
      })
    });
  }


}
