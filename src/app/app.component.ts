import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'fhir-app-test';

  constructor(
    private apiService: ApiService
  ) { }

  patients : any;
  requestTime : Date;
  outputTime : Date;
  searchName: string;

  ngOnInit() {  
    this.requestTime = this.getTime();
    this.apiService.getPatients().subscribe(
      data => {
        console.log(data);
        this.patients = data;
      }
    )
    this.outputTime = this.getTime();
  }

  getTime()
  {
    return new Date();
    //return new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()+':'+  new Date().getMilliseconds();
  }
}
