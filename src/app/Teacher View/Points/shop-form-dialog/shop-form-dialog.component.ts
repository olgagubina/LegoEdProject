import { Component, OnInit, Inject } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { Subscription } from 'rxjs/Subscription';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-shop-form-dialog',
  templateUrl: './shop-form-dialog.component.html',
  styleUrls: ['./shop-form-dialog.component.css']
})
export class ShopFormDialogComponent implements OnInit {
  prizes: any[];
  newItem: any;
  show: boolean = this.studentsViewService.show;
  constructor(public dialogRef: MatDialogRef<ShopFormDialogComponent>, private studentsViewService: StudentsViewService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.newItem = Object.assign({}, {
      description: this.data.description,
      money: this.data.money
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.newItem = Object.assign({}, {
      description: this.data.description,
      money: this.data.money
    });
  }

}
