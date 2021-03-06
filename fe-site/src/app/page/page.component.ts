import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IsLogged} from "../services/Logged";
import {HttpService} from "../services/http.service";
import {Student} from "../model/Student";
import {teacher} from "../model/teacher";
import {delay} from "rxjs/operators";
import {admin} from "../model/admin";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],

})
export class PageComponent implements OnInit {
  private login: any;
  private password:string;
  private role: number;
  private currentStudent:Student;
  private currentTeacher:teacher;
  private currentAdmin: admin;
  private currentName:string;
  private currentSurname: string;
  private status:boolean = false;
  //@Output() login = new EventEmitter();

  constructor(public isLogged: IsLogged,private http: HttpService) {
    this.isLogged.role = 0;
    this.role = isLogged.role;
    this.isLogged.currentName = "";
    this.isLogged.currentSurname = "";
    this.currentName=isLogged.currentName;
    this.currentSurname=isLogged.currentSurname;
  }

  ngOnInit() { }

  emitLogin() {
    this.checkAccount()

  }
   checkAccount() {
     if (this.login >= 100) {
       this.http.getStudentById(this.login)
         .subscribe(student => {
           this.currentStudent = student;
           if (this.currentStudent.password == this.password) {
             this.isLogged.role = 3;
             this.isLogged.currId = this.login;
             this.isLogged.currentSurname=this.currentStudent.surname;
             this.isLogged.currentName=this.currentStudent.name;
           }
         })
     }
     else if (this.login < 100) {
       this.http.getTeacherById(this.login)
         .subscribe(teacher => {
           this.currentTeacher = teacher;
           if (!(this.password.match(this.currentTeacher.password) === null)) {
             this.isLogged.role = 2;
             this.isLogged.currName = this.currentTeacher.speciality;
             this.isLogged.currId = this.login;
             this.isLogged.currentName=this.currentTeacher.name;
             this.isLogged.currentSurname=this.currentTeacher.surname;
           }
         }); }
       else if (this.login.match("root")) {
         if (!(this.password.match("root") === null)) {
               this.isLogged.role = 1;
               this.isLogged.currId = this.login;
               this.isLogged.currentName = "Администратор";
           this.isLogged.currentSurname="";
             }
       }
       else {alert("Неверный пароль. Проверьте правильность введенных данных")}
   }
}
