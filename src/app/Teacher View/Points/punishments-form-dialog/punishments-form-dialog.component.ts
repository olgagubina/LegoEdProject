import { Component, OnInit, Inject } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { Subscription } from 'rxjs/Subscription';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-punishments-form-dialog',
  templateUrl: './punishments-form-dialog.component.html',
  styleUrls: ['./punishments-form-dialog.component.css']
})
export class PunishmentsFormDialogComponent implements OnInit {
  newItem: any;
  show: boolean = this.studentsViewService.show;
  constructor(public dialogRef: MatDialogRef<PunishmentsFormDialogComponent>, private studentsViewService: StudentsViewService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.newItem = Object.assign({}, {
      description: this.data.description,
      money: this.data.money,
      hearts: this.data.hearts
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.newItem = Object.assign({}, {
      description: this.data.description,
      money: this.data.money,
      hearts: this.data.hearts
    });
  }

}
