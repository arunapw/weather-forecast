import { Component, OnInit, VERSION } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentDate : any;
  constructor(public datepipe: DatePipe) {
    this.currentDate =this.datepipe.transform((new Date), 'dd/MM/yyyy');
  }

  ngOnInit(): void {
  }

}
