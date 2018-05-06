import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PointsFormDialogComponent } from '../points-form-dialog/points-form-dialog.component';
import { WarningDialogComponent } from '../../warning-dialog/warning-dialog.component';
import { ShopFormDialogComponent } from '../shop-form-dialog/shop-form-dialog.component';



@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css']
})
export class PrizesComponent implements OnInit {
  displayedColumns = ['Toggle', 'Prize', 'Money', 'Edit'];
  dataSource: MatTableDataSource<PointItem>;
  pointItem: PointItem = new PointItem();

  constructor(private service: StudentsViewService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.prizesData$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    },
      error => { console.error(error); }
    );
    this.service.getPrizes();
  }

  displayItem(prize) {
    this.service.displayItem(prize).subscribe(data => {
      this.service.getPrizes();
      this.service.getDisplayedPoints();
    });
  }

  //ADD ITEM
  openDialog(): void {
        let dialogRef = this.dialog.open(ShopFormDialogComponent, {
          width: '290px',
          data: {
            title: 'Add Prize',
            btnText: 'Add',
            description: this.pointItem.description,
            money: this.pointItem.money
          }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          var newItem = Object.assign({}, result);
          console.log(result);
    
          //Add to data array on service
          if (result) {
              result.cat_id = 3;
              result.xp = 0;
              result.hearts = 0;
              this.service.addPointItems(result).subscribe(
                data => this.service.getPrizes()
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
    let dialogRef = this.dialog.open(ShopFormDialogComponent, {
      width: '290px',
      data: {
        description: point.description,
        money: point.money,
        btnText: 'Edit',
        title: 'Edit '
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      var updPointItem = Object.assign({}, result);
      updPointItem.pointId = point.pointId;
      updPointItem.cat_id = 3;
      console.log(updPointItem);
      if (result) {
        this.service
          .updPointItem(updPointItem)
          .subscribe(data => {
            this.service.getPrizes();
          });
      }
      this.service.show = true;
    });
  }


  //DELETE (archieve) POINT ITEM
  openArchieveDialog(point: PointItem): void {
    let dialogRef = this.dialog.open(WarningDialogComponent, {
      width: '310px',
      data: {
        text: 'Are you sure you want to remove "' + point.description + '" from Shop?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.
          archievePoint(point).subscribe(
            data => {
              this.service.getPrizes();
            },
            error => {
              console.error(error)
            });
      }
    });
  }
}
