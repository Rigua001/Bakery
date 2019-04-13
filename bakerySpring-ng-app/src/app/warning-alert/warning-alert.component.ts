import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  resetUser = false;
  userName = '';
  total = 0;
  paragraphs = [];
  constructor() {

   }

  ngOnInit() {
  }
  onResetName(event:Event){
    this.userName = '';
  }

  onIncriment(event:Event){
    
    this.total +=1 ;
    this.paragraphs.push(this.total);

  }
  getColor(){
    if(this.total > 4){
      return "blue";
    }
    return "white";
  }
}
