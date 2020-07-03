import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { parse } from 'querystring';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent implements OnInit {

  totalamt:number;
  balance:number;
  value:number;

  constructor(private ds:DataService) { }

  ngOnInit() {
  }

  addfeedetails(q){
    console.log(q)
    this.totalamt=q.totalfee
  }

  updatebal(balamt)
  {
    this.value=balamt.target['valueAsNumber']
    console.log(this.value)
    this.balance= this.totalamt-this.value;
    console.log(this.balance);
  }



}
