import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-points-form-dialog',
  templateUrl: './points-form-dialog.component.html',
  styleUrls: ['./points-form-dialog.component.css']
})
export class PointsFormDialogComponent implements OnInit {
  prizes: any[];
newItem: PointItem = new PointItem();
  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() {
    this.studentsViewService.getPrizes();
    this.studentsViewService.pointsData$.subscribe(
    data => this.prizes = data);
    console.log(this.prizes)
  }

  addPointItems(newItem){
    this.studentsViewService.addPointItems(newItem);
  }
}
