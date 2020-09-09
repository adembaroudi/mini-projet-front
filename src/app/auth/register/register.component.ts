import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  RegisterForm: FormGroup ;
  constructor(private apService : ApiserviceService, private router : Router) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      userName : new FormControl ('', Validators.required),
      email : new FormControl ('', Validators.required),
      password : new FormControl ('', Validators.required),
   

  });
}
register() {
 this.apService.reg(this.RegisterForm.value).subscribe(res => {
  this.router.navigate(["/login"]);

 });
}
}
