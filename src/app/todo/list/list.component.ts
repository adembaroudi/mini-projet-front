import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ApiserviceService } from "src/app/apiservice.service";
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  token = localStorage.getItem('token') || {};
  decode = jwt_decode(this.token);
  table;
  updatecars: FormGroup;
  j;
  fileToUpload: File = null;
  Search: "";

  constructor(private apiservice: ApiserviceService) {}
  ngOnInit(): void {
    this.updatecars = new FormGroup({
      titre: new FormControl(),
      description: new FormControl(),
    });
    this.get();
  }
  get() {
    this.apiservice.getOne(this.decode.data._id).subscribe((res: any) => {
      console.log(res);
      this.table =res. data
    });
  }
  remove(i) {
    let j = this.table[i]._id;
    this.apiservice.delete(j).subscribe((res: any) => {
      console.log(res);
    });
  }
  // updt(i) {
  //   let j = this.table[i]._id;
  //   this.apiservice
  //     .update(this.j, this.updatecars.value)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //     });
  // }
}
