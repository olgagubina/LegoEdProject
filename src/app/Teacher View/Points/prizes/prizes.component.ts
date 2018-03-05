import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css']
})
export class PrizesComponent implements OnInit {
  displayedColumns = ['Toggle', 'Prize', 'Cost', 'Edit', 'Delete'];
  prizes: any[];
  dataSource: MatTableDataSource<PointItem>;
  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() {
    this.prizes = this.studentsViewService.getPrizes();
    this.dataSource = new MatTableDataSource(this.prizes);
    console.log(this.prizes);
      }
    
  

}

