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

}
