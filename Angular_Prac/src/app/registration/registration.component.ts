import { Component } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import {FormControl,FormGroup } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(){

  }
  ngOnInit():void{

  }
  user_records:any[]=[];
  data={
    name:"",
    email:"",
    mobile:"",
    password:""
  }

  doRegistration(Values:any){
    //this.user_records=JSON.parse(localStorage.getItem('users') || '()');
    if(this.user_records.some((v)=>{
      return v.email==this.data.email
    })){
      alert("duplicate data");
    }
    else{
      this.user_records.push(this.data)
      localStorage.setItem("users",JSON.stringify(this.user_records));
      alert("Hi, "+ this.data.name +" you are successfully registered");
    }
  }
}
