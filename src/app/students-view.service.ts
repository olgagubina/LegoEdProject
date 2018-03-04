import { Injectable } from '@angular/core';
import PointItem from '../models/point_item';
import Student from '../models/student';
import { HttpClient } from '@angular/common/http';

var PRIZES: Array<PointItem> = [{ _id: 1, category_id: 3, description: 'movie for 2', amount: 200 }, { _id: 2, category_id: 2, description: 'you choose next topic', amount: 300 }, { _id: 3, category_id: 1, description: 'lead the next activity', amount: 200 }, { _id: 4, category_id: 3, description: 'Choose your own project', amount: 100 }, { _id: 5, category_id: 3, description: 'be teacher for a day', amount: 500 }];
var STUDENTS: Array<Student> = [{
  "_id": 1,
  "firstName": "Gabbi",
  "lastName": "Brightie"
}, {
  "_id": 2,
  "firstName": "Sile",
  "lastName": "Yuranovev"
}, {
  "_id": 3,
  "firstName": "Trueman",
  "lastName": "Pengelly"
}, {
  "_id": 4,
  "firstName": "Roderich",
  "lastName": "Dibden"
}, {
  "_id": 5,
  "firstName": "Josefina",
  "lastName": "Chopin"
}, {
  "_id": 6,
  "firstName": "Charley",
  "lastName": "Starsmeare"
}, {
  "_id": 7,
  "firstName": "Julie",
  "lastName": "Zaczek"
}, {
  "_id": 8,
  "firstName": "Arnuad",
  "lastName": "Bome"
}, {
  "_id": 9,
  "firstName": "Sam",
  "lastName": "Le Borgne"
}, {
  "_id": 10,
  "firstName": "Courtney",
  "lastName": "Lowes"
}, {
  "_id": 11,
  "firstName": "Gilbert",
  "lastName": "McTear"
}, {
  "_id": 12,
  "firstName": "Geordie",
  "lastName": "Cahey"
}, {
  "_id": 13,
  "firstName": "Barnabas",
  "lastName": "Cosstick"
}, {
  "_id": 14,
  "firstName": "Albertina",
  "lastName": "Bradburne"
}, {
  "_id": 15,
  "firstName": "Cortney",
  "lastName": "MacCauley"
}, {
  "_id": 16,
  "firstName": "Esdras",
  "lastName": "Kleinstein"
}, {
  "_id": 17,
  "firstName": "Anastassia",
  "lastName": "Mauchlen"
}, {
  "_id": 18,
  "firstName": "Francisca",
  "lastName": "Dale"
}, {
  "_id": 19,
  "firstName": "Cris",
  "lastName": "St Louis"
}, {
  "_id": 20,
  "firstName": "Vin",
  "lastName": "Presnall"
}]

@Injectable()
export class StudentsViewService {

  constructor(private http: HttpClient) { }

  getPrizes() {
    return PRIZES;
  }

  getStudents() {
    return STUDENTS;
  }
}
