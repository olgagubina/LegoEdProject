import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { MatTableDataSource } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  displayedColumns = ['Toggle', 'Reward', 'Cost', 'Edit', 'Delete'];
  rewards: PointItem[];
  dataSource: MatTableDataSource<PointItem>;
  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() {
    this.studentsViewService.rewardsData$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  }, error => {
    console.error(error);
  });
    this.studentsViewService.getRewards();
  }

 
}

