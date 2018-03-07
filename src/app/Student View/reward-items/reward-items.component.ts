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
    this.studentsViewService.displayRewardsData$.subscribe(data => {
      this.rewards = data;
      // this.subscribeToData();
  }, error => {
    console.error(error);
  });
    this.studentsViewService.getDisplayedRewards();
  }

  // private subscribeToData(): void {
  //   var service = this.studentsViewService
  //   setInterval(function(){
  //     service.getDisplayedRewards();
  //   }, 7000);
  // }
}
