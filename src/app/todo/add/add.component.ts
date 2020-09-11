import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  token = localStorage.getItem('token') || {};
  decode = jwt_decode(this.token);
  hide = true;
  list: FormGroup;
  fileToUpload :File= null;
  id:String;
  vote;
  choix : String;

  constructor(private apService : ApiserviceService , private router : Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.list = new FormGroup ({
      titre : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required)
    });
    this.id = this.route.snapshot.params["id"];
  }
  add() {
  
    this.apService.Ajout(this.list.value,this.decode.data._id).subscribe((res: any) => {
      this.router.navigate(["/list"]);
    });
      };
      getOneVote(){
        this.apService.getOne(this.id).subscribe((data: { title; description })=>{
         this.vote.data
        });
       }
       voter() {
         this.apService.sondage({ choix: this.choix }, this.id).subscribe(() => {
           this.router.navigate(["/list"]);
         });
       }
       onSubmit(){
         this.voter()
       }
}
