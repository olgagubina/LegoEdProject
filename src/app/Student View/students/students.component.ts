import { Component, OnInit } from '@angular/core';
import { StudentsViewService } from '../../students-view.service';
import { Observable } from 'rxjs/Observable';

import Student from '../../../models/student-model';
import * as io from '../../../../socket.js'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  socket: any;
  io: any;
  students: Student[];

  constructor(private service: StudentsViewService) { 
    this.socket = io('http://localhost:3000');
    this.socket.on('broadcast_objChange', function(data){
      console.log(data);
      if (data instanceof Student) {
        this.students.push.data;
      }
  }.bind(this)); 
  }

  ngOnInit() {
    this.service.presentStudentsData$.subscribe(
      data => {
        this.students = data;
        // this.subscribeToData();
      },
      error => {
        console.error(error);
      }
    );
    this.service.getPresentStudents();
    // var service = this.service
  
    // setInterval(function(){
    //   service.getPresentStudents(); 
    // }, 7000);
  }
}
