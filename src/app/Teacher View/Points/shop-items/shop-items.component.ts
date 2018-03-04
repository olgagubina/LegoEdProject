import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.css']
})
export class ShopItemsComponent implements OnInit {
rewards: any[];
  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() {
  this.rewards = this.studentsViewService.getRewards();
 
  }

}
