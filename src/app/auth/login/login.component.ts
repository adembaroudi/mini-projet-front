import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  LoginForm: FormGroup ;
   responseData ;
  constructor(private apService : ApiserviceService) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      UserName : new FormControl ('', Validators.required),
      email : new FormControl ('', Validators.required),
      password : new FormControl ('', Validators.required)
  });
  }
  login() {
    this.apService.signin(this.LoginForm.value).subscribe(res => {
      console.log(res);
      this.responseData = res ;
      localStorage.setItem('token', this.responseData.access_token);
    });
  }

}
