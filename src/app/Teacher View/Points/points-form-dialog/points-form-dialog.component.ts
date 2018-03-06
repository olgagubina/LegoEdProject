import { Component, OnInit, Inject } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { Subscription } from 'rxjs/Subscription';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-points-form-dialog',
  template: 'passed in {{ data }}',
  templateUrl: './points-form-dialog.component.html',
  styleUrls: ['./points-form-dialog.component.css']
})
export class PointsFormDialogComponent implements OnInit {
prizes: any[];
newItem: any;
constructor(public dialogRef: MatDialogRef<PointsFormDialogComponent>, private studentsViewService: StudentsViewService,
  @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    this.newItem = Object.assign({}, {
      cat_id: this.data.cat_id || null,
      description: this.data.description,
      amount: this.data.amount
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.newItem = Object.assign({}, {
      cat_id: this.data.cat_id || null,
      description: this.data.description,
      amount: this.data.amount
    });
  }


  // addPointItems(newItem){
  //   this.studentsViewService.addPointItems(newItem);
  // }
}
