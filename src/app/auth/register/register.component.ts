import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  RegisterForm: FormGroup ;
  constructor(private apService : ApiserviceService) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      UserName : new FormControl ('', Validators.required),
      email : new FormControl ('', Validators.required),
      password : new FormControl ('', Validators.required),
      // ConfirmPassword : new FormControl ('', Validators.required),
      // validator: MustMatch('password', 'confirmPassword')

  });
}
register() {
 this.apService.reg(this.RegisterForm.value).subscribe(res => {
   console.log(res);

 });
}
}
