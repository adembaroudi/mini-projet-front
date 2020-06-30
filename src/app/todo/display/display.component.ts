import { Component, OnInit } from "@angular/core";
import * as jwt_decode from "jwt-decode";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { CommentService } from 'src/app/commentservice.service';
import { Socket } from 'ngx-socket-io';




@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"],
})
export class DisplayComponent implements OnInit {
  commentaire : FormGroup;
  
  constructor(private Comment : CommentService, private apService : ApiserviceService, private router: ActivatedRoute,private Socket : Socket ) {}
  id = this.router.snapshot.paramMap.get("id");
  decoded = jwt_decode(this.apService.responseData)
  card;
  listComment : [];
  ngOnInit(): void {
    this.commentaire=new FormGroup({
      comment : new FormControl(),
      user : new FormControl(this.decoded.data.userName)
    })
    console.log(this.decoded);
    
    this.get();
    this.dispcomnt();
    this.Socket.on("newComment",(data)=>{
    this.dispcomnt();
    console.log("e5dem nayyek");

    })

  }
  get() {
    this.apService.getOne(this.id).subscribe((res) => {
      console.log(res);
      this.card = res;
    });
  }
  commentair(){
    this.Comment.comnt(this.id,this.commentaire.value).subscribe((res:any )=>{
 console.log(res);
    });
  }
  dispcomnt(){
    this.Comment.getcomnt(this.id).subscribe((res:any)=>{
      console.log(res);
      this.listComment = res.commentaire
      
    })
  }
}
