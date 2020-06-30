import { Component, OnInit } from '@angular/core';
// import * as jwt_decode from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { CheckpipePipe } from 'src/app/checkpipe.pipe';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  table ;
  profils;
  updatecars: FormGroup;
  j ;
  fileToUpload :File= null;
  Search:"";
  boxes = ['SUV', 'compact'];
  selectedCheckboxes = [];


  constructor(private apiservice: ApiserviceService) { }
  ngOnInit(): void {
    this.updatecars = new FormGroup ({
      cars : new FormControl(),
      class : new FormControl()
    });
  this.get()
  }
  get(){
   this.apiservice.getall().subscribe((res: any)=>{
    console.log(res);      
    this.table = res.data
    this.profils = res.data
      })};
      remove(i){
        let j=this.table[i]._id
        this.apiservice.delete(j).subscribe((res:any) =>{
          console.log(res);
        })
      }
      getcar(i) {
         this.j = this.table[i]._id
         this.updatecars = new FormGroup({
           cars: new FormControl(this.table[i].cars)
         })
      }
      updt(){
          this.apiservice.update(this.j,this.updatecars.value).subscribe((res:any) =>{
          console.log(res);
      this.addimg(res._id)

        })
      }
      fileProgress(event) {
        this.fileToUpload =<File>event.target.files[0];
      }
            addimg(j){
      const  formData = new FormData();
      formData.append("file",this.fileToUpload);
      this.apiservice.upfile(j,formData).subscribe(res=>{
        console.log(res);
        
      })

            }
            filterCheck(checkbox) {

              if (!this.selectedCheckboxes.includes(checkbox)) {
                this.selectedCheckboxes.push(checkbox);
                console.log(this.selectedCheckboxes);
              } else {
                const i = this.selectedCheckboxes.indexOf(checkbox);
                this.selectedCheckboxes.splice(i, 1);
                console.log(this.selectedCheckboxes);
              }
              const p = new CheckpipePipe();
              this.table = p.transform(this.profils , this.selectedCheckboxes);
            }
}

