import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-students',
  templateUrl: './tv-students.component.html',
  styleUrls: ['./tv-students.component.css']
})
export class TvStudentsComponent implements OnInit {
title: String;

  constructor() { }

  ngOnInit() {
    this.title = 'Students';
  }

}
