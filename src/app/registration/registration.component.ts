import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  errorMessage = '';    // validation of error handles
  error: {name:string, message:string} = {name: '', message: ''};   // for firebase error handles


  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }

  countDownDate = new Date("April 13, 2021 12:00:00").getTime();
  range : any;
  visible: boolean= false;

  x= setInterval(()=>{
    var now = new Date().getTime();
    var distance = this.countDownDate-now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)/(1000*60)));
    var seconds = Math.floor((distance % (1000*60))/1000);
    this.range = days+"d "+hours+"h "+minutes+"m "+seconds+"s ";

    if(distance<0){
      clearInterval(this.x);
      this.visible= true;
    }
  });
}