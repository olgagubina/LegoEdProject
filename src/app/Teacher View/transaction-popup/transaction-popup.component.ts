import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-transaction-popup',
  templateUrl: './transaction-popup.component.html',
  styleUrls: ['./transaction-popup.component.css']
})
export class TransactionPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TransactionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
