import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../students-view.service';
import PointItem from '../../../models/point-model';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.css']
})
export class ShopItemsComponent implements OnInit {
prizes: any;
  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() {
    this.studentsViewService.displayPrizesData$.subscribe(data => {
      this.prizes = data;
      // this.subscribeToData();
  }, error => {
    console.error(error);
  });
    this.studentsViewService.getDisplayedPrizes();
  }

  // private subscribeToData(): void {
  //   var service = this.studentsViewService
  //   setInterval(function(){
  //     service.getDisplayedPrizes(); 
  //   }, 7000);
  // }
}
