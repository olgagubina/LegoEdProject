import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import Student from '../../../../models/student-model';
import { MatTableDataSource } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import PointItem from '../../../../models/point-model';



@Component({
  selector: 'app-present-students',
  templateUrl: './present-students.component.html',
  styleUrls: ['./present-students.component.css']
})

export class PresentStudentsComponent implements OnInit {
  displayedColumns = ['firstName', 'lastName', 'form'];
  allStudents: Student[];
  dataSource: MatTableDataSource<Student>;
  title: String;

  // for dynamic transaction input
  points: PointItem[];
  prizes: PointItem[];
  transactionForm: FormGroup;
  
  constructor(
    private service: StudentsViewService,
    private fb: FormBuilder
  ) { this.createForm(); }

  createForm() {
    this.transactionForm = this.fb.group({
      selectedCatId: [null, Validators.required],
      selectedPointId: [null, Validators.required],
      comment: ''
    });
  }

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
    // get list of prizes
    this.service.displayPrizesData$.subscribe(
      data => this.prizes = data
    );
    this.service.getDisplayedPrizes();
  }
}
