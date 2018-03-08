import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { MatTableDataSource } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PointsFormDialogComponent } from '../points-form-dialog/points-form-dialog.component';
import { WarningDialogComponent } from '../../warning-dialog/warning-dialog.component';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  displayedColumns = ['Toggle', 'Reward', 'Cost', 'Edit'];
  rewards: PointItem[];

  dataSource: MatTableDataSource<PointItem>;
  constructor(private studentsViewService: StudentsViewService, public dialog: MatDialog) { }

  ngOnInit() {
    this.studentsViewService.rewardsData$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  }, error => {
    console.error(error);
  });
    this.studentsViewService.getRewards();
  }

  displayItem(reward) {
    this.studentsViewService.displayItem(reward).subscribe(data => {
      this.studentsViewService.getRewards();
    });
  }

  // EDIT POINT ITEM
  openEditDialog(point: PointItem): void {
    this.studentsViewService.show = false;
    let dialogRef = this.dialog.open(PointsFormDialogComponent, {
      width: '290px',
      data: {
        category: point.category,
        description: point.description,
        amount: point.amount,
        btnText: 'Edit',
        title: 'Edit '+ point.category
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      var updPointItem = Object.assign({}, result);
      updPointItem.pointId = point.pointId;
      updPointItem.cat_id = 1;
      console.log(updPointItem);
      if (result) {
        this.studentsViewService
          .updPointItem(updPointItem)
          .subscribe(data => {
            this.studentsViewService.getRewards();
          });
      }
      this.studentsViewService.show = true;
    });
  }

  //DELETE (archieve) POINT ITEM
  openArchieveDialog(point: PointItem): void {
    let dialogRef = this.dialog.open(WarningDialogComponent, {
      width: '310px',
      data: {
        text: 'Are you sure you want to remove point item "' + point.description + '" (' + point.amount + ') from the Rewards?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
      this.studentsViewService.
        archievePoint(point).subscribe(
          data => {
            this.studentsViewService.getRewards();
          },
          error => {
            console.error(error)
          });
        }
    });
  } 
}

