import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addition-project';
  num1:number=0;
  num2:number=0;
  total:number=0;
  constructor(){}

  add():void{
    this.total=this.num1+this.num2;
  }



}
