import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {
title: String;

  constructor() { }

  ngOnInit() {
    this.title = 'Editor';
  }

}
