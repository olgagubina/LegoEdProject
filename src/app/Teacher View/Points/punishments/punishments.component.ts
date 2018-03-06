import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../../students-view.service';
import PointItem from '../../../../models/point-model';
import { MatTableDataSource } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-punishments',
  templateUrl: './punishments.component.html',
  styleUrls: ['./punishments.component.css']
})
export class PunishmentsComponent implements OnInit {


  displayedColumns = ['Toggle', 'Penalty', 'Cost', 'Edit'];
  penalties: PointItem[];

  dataSource: MatTableDataSource<PointItem>;
  constructor(private studentsViewService: StudentsViewService) { }


  ngOnInit() {
    this.studentsViewService.penaltiesData$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  }, error => {
    console.error(error);
  });
    this.studentsViewService.getPenalties();
  }

}




