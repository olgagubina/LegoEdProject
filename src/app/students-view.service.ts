import { Injectable } from '@angular/core';
import PointItem from '../models/point-model';
import Student from '../models/student-model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


var PENALTIES: Array<PointItem> = [{ pointId: 1, catId  : 2, description:'pushing', amount: 300}, { pointId: 2, catId : 2, description:'yelling', amount: 100}, { pointId: 3, catId : 3, description:'missing class', amount: 100}, { pointId: 4, catId : 1, description:'no homework', amount: 200}, { pointId: 5, catId : 3, description:'making fun of', amount: 200}]
var REWARDS: Array<PointItem> = [{ pointId: 1, catId: 2, description: 'helping student', amount: 300}, { pointId: 2, catId
  : 2, description: 'extra credit', amount: 100}, { pointId: 3, catId
  : 3, description: 'helping teacher', amount: 100}, { pointId: 4, catId
  : 1, description: 'help clean', amount: 200}, { pointId: 5, catId
  : 3, description: 'exceptional work', amount: 200}]
var PRIZES: Array<PointItem> = [{ pointId: 1, catId
  : 3, description: 'movie for 2', amount: 200}, { pointId: 2, catId
  : 2, description: 'you choose next topic', amount: 300}, { pointId: 3, catId
  : 1, description: 'lead the next activity', amount: 200}, { pointId: 4, catId
  : 3, description: 'Choose your own project', amount: 100}, { pointId: 5, catId
  : 3, description: 'be teacher for a day', amount: 500}];


@Injectable()
export class StudentsViewService {
  studentsData$: Subject<Student[]> = new Subject;
  students: Student[];
  prizes: PointItem[] = PRIZES;
  penalties: PointItem[] = PENALTIES;
  rewards: PointItem[] = REWARDS;
  prizesData$: Subject<PointItem[]> = new Subject;
  rewardsData$: Subject<PointItem[]> = new Subject;
  penaltiesData$: Subject<PointItem[]> = new Subject;
  


  constructor(private http: HttpClient) { }


  // STUDENT VIEW FUNCS
  getPrizes(): void {
    this.http.get<PointItem[]> ('api/points/all/prizes').subscribe(
      data => this.prizesData$.next(data)
    );

  }

  getPenalties(): void{
    this.http.get<PointItem[]> ('api/points/all/penalties').subscribe(
      data => this.penaltiesData$.next(data)
    );
  }


  getRewards(): void {
    this.http.get<PointItem[]> ('api/points/all/rewards').subscribe(
      data => this.rewardsData$.next(data)
    );
  }
    
  getStudents():void {
    // return this.students;
    this.http.get<Student[]> ('api/students/all').subscribe(
      data => this.studentsData$.next(data)
    );
  }

  //ADD STUDENT
  addStudent(newStudent:Student): Observable <Student>  {
    console.log(newStudent);
    // newStudent.studentId = this.generateId();
    // newStudent.rating = 0;
    // newStudent.balance = 0;
    // newStudent.present = false;
    // this.students.push(newStudent);
    // console.log(this.students);
    return this.http.post<Student>('api/students/add', newStudent);
  }
  

  //ADD Point items
addPrize(newItem: PointItem): Observable<PointItem>{
  console.log(newItem)
  return this.http.post<PointItem>('api/points/add/prizes', newItem);
 }

 addPenalty(newItem: PointItem): Observable<PointItem>{
  console.log(newItem)
  return this.http.post<PointItem>('api/points/add/penalties', newItem);
 }

 addReward(newItem: PointItem): Observable<PointItem>{
  console.log(newItem)
  return this.http.post<PointItem>('api/points/add/rewards', newItem);
 }
  // addPointItems(newItem: PointItem): Observable<PointItem>{
  //   console.log(newItem);
  //   return this.http.post<PointItem>('api/points/add', newItem);
  // }

}
