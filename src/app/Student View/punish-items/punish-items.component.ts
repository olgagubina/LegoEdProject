import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../students-view.service';
import PointItem from '../../../models/point-model';

@Component({
  selector: 'app-punish-items',
  templateUrl: './punish-items.component.html',
  styleUrls: ['./punish-items.component.css']
})
export class PunishItemsComponent implements OnInit {
  penalties: PointItem[];

  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit() {
    this.studentsViewService.displayPenaltiesData$.subscribe(data => {
      this.penalties = data;
      // this.subscribeToData();
    }, error => {
      console.error(error);
    });
    this.studentsViewService.getDisplayedPenalties();
  }

  // private subscribeToData(): void {
  //   var service = this.studentsViewService
  //   setInterval(function(){
  //     service.getDisplayedPenalties();
  //   }, 7000);
  // }
}
