import { Injectable } from '@angular/core';
import PointItem from '../models/point-model';
import Student from '../models/student-model';
import { HttpClient } from '@angular/common/http';

var PENALTIES: Array<PointItem> = [{pointId: 1, catId: 2, description:'pushing', amount: 300}, {pointId: 2, catId: 2, description:'yelling', amount: 100}, {pointId: 3, catId: 3, description:'missing class', amount: 100}, {pointId: 4, catId: 1, description:'no homework', amount: 200}, {pointId: 5, catId: 3, description:'making fun of', amount: 200}]
var REWARDS: Array<PointItem> = [{pointId: 1, catId: 2, description:'helping student', amount: 300}, {pointId: 2, catId: 2, description:'extra credit', amount: 100}, {pointId: 3, catId: 3, description:'helping teacher', amount: 100}, {pointId: 4, catId: 1, description:'help clean', amount: 200}, {pointId: 5, catId: 3, description:'exceptional work', amount: 200}]
var PRIZES: Array<PointItem> = [{pointId: 1, catId: 3, description:'movie for 2', amount: 200}, {pointId: 2, catId: 2, description:'you choose next topic', amount: 300}, {pointId: 3, catId: 1, description:'lead the next activity', amount: 200}, {pointId: 4, catId: 3, description:'Choose your own project', amount: 100}, {pointId: 5, catId: 3, description:'be teacher for a day', amount: 500}];
var STUDENTS: Array<Student> = [{
  "studentId": 1,
  "firstName": "Gabbi",
  "lastName": "Brightie"
}, {
  "studentId": 2,
  "firstName": "Sile",
  "lastName": "Yuranovev"
}, {
  "studentId": 3,
  "firstName": "Trueman",
  "lastName": "Pengelly"
}, {
  "studentId": 4,
  "firstName": "Roderich",
  "lastName": "Dibden"
}, {
  "studentId": 5,
  "firstName": "Josefina",
  "lastName": "Chopin"
}, {
  "studentId": 6,
  "firstName": "Charley",
  "lastName": "Starsmeare"
}, {
  "studentId": 7,
  "firstName": "Julie",
  "lastName": "Zaczek"
}, {
  "studentId": 8,
  "firstName": "Arnuad",
  "lastName": "Bome"
}, {
  "studentId": 9,
  "firstName": "Sam",
  "lastName": "Le Borgne"
}, {
  "studentId": 10,
  "firstName": "Courtney",
  "lastName": "Lowes"
}, {
  "studentId": 11,
  "firstName": "Gilbert",
  "lastName": "McTear"
}, {
  "studentId": 12,
  "firstName": "Geordie",
  "lastName": "Cahey"
}, {
  "studentId": 13,
  "firstName": "Barnabas",
  "lastName": "Cosstick"
}, {
  "studentId": 14,
  "firstName": "Albertina",
  "lastName": "Bradburne"
}, {
  "studentId": 15,
  "firstName": "Cortney",
  "lastName": "MacCauley"
}, {
  "studentId": 16,
  "firstName": "Esdras",
  "lastName": "Kleinstein"
}, {
  "studentId": 17,
  "firstName": "Anastassia",
  "lastName": "Mauchlen"
}, {
  "studentId": 18,
  "firstName": "Francisca",
  "lastName": "Dale"
}, {
  "studentId": 19,
  "firstName": "Cris",
  "lastName": "St Louis"
}, {
  "studentId": 20,
  "firstName": "Vin",
  "lastName": "Presnall"
}]

@Injectable()
export class StudentsViewService {

  constructor(private http: HttpClient) { }

  getPrizes() {
    return PRIZES;
}
  
getStudents(){
  return STUDENTS;
}

getPenalties(){
  return PENALTIES;
}

getRewards(){
  return REWARDS;
}
}
