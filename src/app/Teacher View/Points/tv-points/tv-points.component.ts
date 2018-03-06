import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PointsFormDialogComponent } from '../points-form-dialog/points-form-dialog.component';
import PointItem from '../../../../models/point-model';
import { StudentsViewService } from '../../../students-view.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tv-points',
  templateUrl: './tv-points.component.html',
  styleUrls: ['./tv-points.component.css']
})

export class TvPointsComponent implements OnInit {
  pointItem: PointItem = new PointItem();
  dataSource: MatTableDataSource<PointItem>;

  constructor(private studentsViewService: StudentsViewService, public dialog: MatDialog) { }

  ngOnInit() {
    // this.studentsViewService.pointsData$.subscribe(data => {
    //   this.dataSource = new MatTableDataSource(data);
    // }, error => {
    //   console.error(error);
    // });
    // this.studentsViewService.getPrizes();

  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PointsFormDialogComponent, {
      width: '290px',
      data: {
        categ: [
          { cat_id: 1, category: 'Reward' },
          { cat_id: 2, category: 'Penalty' },
          { cat_id: 3, category: 'Prize' }
        ],
        description: this.pointItem.description,
        amount: this.pointItem.amount
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      var newItem = Object.assign({}, result);
      console.log(result);

      // Add to data array on service
      if (result) {
        if (result.cat_id == 1) {
          console.log('at tv-points for Reward', result);
          this.studentsViewService.addPointItems(result).subscribe(
            data => this.studentsViewService.getRewards()
          );
        }

        else if (result.cat_id == 2) {
          this.studentsViewService.addPointItems(result).subscribe(
            data => this.studentsViewService.getPenalties()
          );
        } else if (result.cat_id == 3) {
          this.studentsViewService.addPointItems(result).subscribe(
            data => this.studentsViewService.getPrizes()
          );
        }

        // Clean the input
        this.pointItem = new PointItem;
      }
    });
  }

}
