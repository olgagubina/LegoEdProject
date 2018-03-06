import { Injectable } from '@angular/core';
import PointItem from '../models/point-model';
import Student from '../models/student-model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StudentsViewService {
  studentsData$: Subject<Student[]> = new Subject;

  students: Student[]; 
  prizesData$: Subject<PointItem[]> = new Subject;
  rewardsData$: Subject<PointItem[]> = new Subject;
  penaltiesData$: Subject<PointItem[]> = new Subject;

  constructor(private http: HttpClient) { }


  //GET ALL STUDENTS

  getStudents(): void {
    this.http.get<Student[]>('api/students/all').subscribe(
      data => this.studentsData$.next(data)
    );
  }

  //GET PRESENT STUDENTS
  getPresentStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('api/students/present');
  }

  // ADD STUDENT
  addStudent(newStudent: Student): Observable<Student> {
    console.log(newStudent);
    return this.http.post<Student>('api/students/add', newStudent);
  }

  //GET POINTS
  getPrizes(): void {
    this.http.get<PointItem[]>('api/points/all/prizes').subscribe(
      data => this.prizesData$.next(data)
    );
  }

  getPenalties(): void {
    this.http.get<PointItem[]>('api/points/all/penalties').subscribe(
      data => this.penaltiesData$.next(data)
    );
  }


  getRewards(): void {
    this.http.get<PointItem[]>('api/points/all/rewards').subscribe(
      data => this.rewardsData$.next(data)
    );
  }

  //ADD Point items
  addPointItems(newItem: PointItem): Observable<PointItem>{
    console.log(newItem);
    return this.http.post<PointItem>('api/points/add', newItem);
  }



  // addPrize(newItem: PointItem): Observable<PointItem> {
  //   console.log(newItem)
  //   return this.http.post<PointItem>('api/points/add', newItem);
  // }
  // addPenalty(newItem: PointItem): Observable<PointItem> {
  //   console.log(newItem)
  //   return this.http.post<PointItem>('api/points/add/penalties', newItem);
  // }

  // addReward(newItem: PointItem): Observable<PointItem> {
  //   console.log(newItem);
  //   return this.http.post<PointItem>('api/points/add/rewards', newItem);
  // }


}
