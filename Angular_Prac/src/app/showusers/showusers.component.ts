import { Component } from '@angular/core';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrl: './showusers.component.css'
})
export class ShowusersComponent {

  user_records:any[]=[];
  data={
    name:"",
    email:"",
    mobile:"",
    password:""
  }
  constructor(){
    this.user_records=JSON.parse(localStorage.getItem('users') || '()');
  }
}
