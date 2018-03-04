import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../students-view.service';
import PointItem from '../../../models/point_item';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.css']
})
export class ShopItemsComponent implements OnInit {
prizes: any[];
  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() {
    this.prizes = this.studentsViewService.getPrizes();
  }

}