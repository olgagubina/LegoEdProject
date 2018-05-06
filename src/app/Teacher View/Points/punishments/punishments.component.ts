import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { MatTableDataSource } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PunishmentsFormDialogComponent } from '../punishments-form-dialog/punishments-form-dialog.component';
import { WarningDialogComponent } from '../../warning-dialog/warning-dialog.component';

@Component({
  selector: 'app-punishments',
  templateUrl: './punishments.component.html',
  styleUrls: ['./punishments.component.css']
})
export class PunishmentsComponent implements OnInit {
  displayedColumns = ['Toggle', 'Penalty', 'Hearts', 'Money', 'Edit'];
  dataSource: MatTableDataSource<PointItem>;
  pointItem: PointItem = new PointItem();

  constructor(private service: StudentsViewService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.penaltiesData$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    },
      error => { console.error(error); }
    );
    this.service.getPenalties();
  }

  displayItem(penalty) {
    this.service.displayItem(penalty).subscribe(data => {
      this.service.getPenalties();
      this.service.getDisplayedPoints();
    });
  }

  //ADD ITEM
  openDialog(): void {
    let dialogRef = this.dialog.open(PunishmentsFormDialogComponent, {
      width: '290px',
      data: {
        title: 'Add Penalty',
        btnText: 'Add',
        description: this.pointItem.description,
        money: this.pointItem.money,
        hearts: this.pointItem.hearts
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      var newItem = Object.assign({}, result);
      console.log(result);

      //Add to data array on service
      if (result) {
          result.cat_id = 2;
          result.xp = 0;
          this.service.addPointItems(result).subscribe(
            data => this.service.getPenalties()
          );
        }

        //Clean the input
        this.pointItem = new PointItem;
      // }
    });
  }

// EDIT POINT ITEM
openEditDialog(point: PointItem): void {
this.service.show = false;
let dialogRef = this.dialog.open(PunishmentsFormDialogComponent, {
  width: '290px',
  data: {
    description: point.description,
    money: this.pointItem.money,
    hearts: this.pointItem.hearts,
    btnText: 'Edit',
    title: 'Edit '
  }
});

dialogRef.afterClosed().subscribe(result => {
  console.log('The dialog was closed');
  var updPointItem = Object.assign({}, result);
  updPointItem.pointId = point.pointId;
  updPointItem.cat_id = 2;
  console.log(updPointItem);
  if (result) {
    this.service
      .updPointItem(updPointItem)
      .subscribe(data => {
        this.service.getPenalties();
      });
  }
  this.service.show = true;
});
}

}




