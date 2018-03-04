import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../students-view.service';
import PointItem from '../../../models/point_item';

@Component({
  selector: 'app-reward-items',
  templateUrl: './reward-items.component.html',
  styleUrls: ['./reward-items.component.css']
})
export class RewardItemsComponent implements OnInit {
rewards: any[];
  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() {
    this.rewards = this.studentsViewService.getRewards();
  }

}
