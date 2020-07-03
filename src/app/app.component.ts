import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
// import { NgxSpinnerService } from 'ngx-spinner';
// ,public spinner:NgxSpinnerService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IMS';

  constructor(public ds:DataService) {}
  

  ngOnInit(){
    //  /** spinner starts on init */
    //  this.spinner.show();
 
    //  setTimeout(() => {
    //    /** spinner ends after 5 seconds */
    //    this.spinner.hide();
    //  }, 2000);
  }

  
}
