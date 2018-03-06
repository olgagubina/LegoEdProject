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
newItem: PointItem = new PointItem();
constructor(public dialogRef: MatDialogRef<PointsFormDialogComponent>, private studentsViewService: StudentsViewService,
  @Inject(MAT_DIALOG_DATA) public data: PointItem) { }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  // addPointItems(newItem){
  //   this.studentsViewService.addPointItems(newItem);
  // }
}
