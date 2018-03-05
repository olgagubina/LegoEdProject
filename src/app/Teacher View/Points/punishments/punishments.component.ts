import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { MatTableDataSource } from '@angular/material';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-punishments',
  templateUrl: './punishments.component.html',
  styleUrls: ['./punishments.component.css']
})
export class PunishmentsComponent implements OnInit {

  displayedColumns = ['Penalty', 'Cost', 'Edit', 'Delete'];
  penalties: any[];
  dataSource: MatTableDataSource<PointItem>;
  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() {
    this.penalties = this.studentsViewService.getPenalties();
    this.dataSource = new MatTableDataSource(this.penalties);
    console.log(this.penalties);
  }

}




