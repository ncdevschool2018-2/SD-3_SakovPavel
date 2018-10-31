import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('studentsTemplate') readonly studentsTemplate;
  students: any = [];
  
  ngOnInit() {

  }
}
