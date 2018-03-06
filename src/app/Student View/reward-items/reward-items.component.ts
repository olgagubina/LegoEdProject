import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../students-view.service';
import PointItem from '../../../models/point-model';

@Component({
  selector: 'app-reward-items',
  templateUrl: './reward-items.component.html',
  styleUrls: ['./reward-items.component.css']
})
export class RewardItemsComponent implements OnInit {
rewards: PointItem[];
  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() { 
    this.studentsViewService.getRewards();
  }

}
