import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import PointItem from '../models/point-model';
import Student from '../models/student-model';
import { Transaction } from '../models/transaction-model';

@Injectable()
export class StudentsViewService {
  studentsData$: Subject<Student[]> = new Subject;
  presentStudentsData$: Subject<Student[]> = new Subject;
  prizesData$: Subject<PointItem[]> = new Subject;
  displayPrizesData$: Subject<PointItem[]> = new Subject;
  rewardsData$: Subject<PointItem[]> = new Subject;
  displayRewardsData$: Subject<PointItem[]> = new Subject;
  penaltiesData$: Subject<PointItem[]> = new Subject;
  displayPenaltiesData$: Subject<PointItem[]> = new Subject;
  displayPointsData$: Subject<PointItem[]> = new Subject; // for dynamic input

  students: Student[];
  prizes: PointItem[];
  penalties: PointItem[];
  rewards: PointItem[];
  show: boolean = true;

  constructor(private http: HttpClient) { }


  // GET ALL STUDENTS
  getStudents(): void {
    // return this.students;
    this.http.get<Student[]>('api/students/all').subscribe(
      data => this.studentsData$.next(data)
    );
  }

  // GET PRESENT STUDENTS
  getPresentStudents(): void {
    this.http.get<Student[]>('api/students/present').subscribe(
      data => this.presentStudentsData$.next(data)
    );
  }

  // MARK STUDENT PRESENT
  studentPresent(stud): Observable<Student[]> {
    console.log(stud.firstName, stud.present);
    return this.http.put<Student[]>('api/students/toggle/' + stud.studentId, stud);
  }

  // ADD STUDENT
  addStudent(newStudent: Student): Observable<Student> {
    console.log(newStudent);
    // newStudent.studentId = this.generateId();
    // newStudent.rating = 0;
    // newStudent.balance = 0;
    // newStudent.present = false;
    // this.students.push(newStudent);
    // console.log(this.students);
    return this.http.post<Student>('api/students/add', newStudent);
  }

  // UPDATE STUDENT
  updStudent(updStudent:Student): Observable<Student> {
    console.log(updStudent);
    return this.http.put<Student>('api/students/update/'+updStudent.studentId, updStudent);
  }

  //ARCHIEVE STUDENT
  archieveStudent(delStudent: Student): Observable<Student> {
    console.log(delStudent);
    return this.http.put<Student>('api/students/delete/'+delStudent.studentId, delStudent);
  }

  // GET POINTS
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

  // ADD Point items
  addPointItems(newItem: PointItem): Observable<PointItem> {
    console.log(newItem);
    return this.http.post<PointItem>('api/points/add', newItem);
  }

  // MARK Point items to DISPLAY
  displayItem(item): Observable<PointItem[]> {
    console.log(item.description, item.display);
    return this.http.put<PointItem[]>('api/points/toggle/' + item.pointId, item);
  }

  // DISPLAY Prizes
  getDisplayedPrizes(): void {
    this.http.get<PointItem[]>('api/points/displayed/prizes').subscribe(
      data => this.displayPrizesData$.next(data)
    );
  }

  // DISPLAY Penalties
  getDisplayedPenalties(): void {
    this.http.get<PointItem[]>('api/points/displayed/penalties').subscribe(
      data => this.displayPenaltiesData$.next(data)
    );
  }

  // DISPLAY Rewards
  getDisplayedRewards(): void {
    this.http.get<PointItem[]>('api/points/displayed/rewards').subscribe(
      data => this.displayRewardsData$.next(data)
    );
  }

  // GET POINTS FOR DISPLAY
  getDisplayedPoints(): void {
    this.http.get<PointItem[]>('api/points/displayed/allpoints').subscribe(
      data => {
        this.displayPointsData$.next(data)
      }
    );
  }

  //UPDATE POINT ITEM 
  updPointItem(updPointItem:PointItem): Observable<Student> {
    console.log(updPointItem);
    return this.http.put<Student>('api/points/update/'+updPointItem.pointId, updPointItem);
  }

  // SAVE TRANSACTIONS
  saveTransaction(newTrans: any): Observable<Transaction> {
    return this.http.post<Transaction>('api/students/transactions/add', newTrans);
  }

}
