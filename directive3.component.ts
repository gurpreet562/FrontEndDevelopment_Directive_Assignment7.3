import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
    
})
export class AppComponent {
    color:string;
     title = 'List Of Employees';
employees:any[]=[
  {name:'abc',age:30},
  {name:'cde',age:34},
  {name:'fgh',age:34},
  {name:'bmn',age:34}
];
  }


