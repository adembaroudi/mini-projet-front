import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  hide = true;
  list: FormGroup;
  fileToUpload :File= null;
  constructor(private apService : ApiserviceService) { }

  ngOnInit(): void {
    this.list = new FormGroup ({
      cars : new FormControl('', Validators.required),
      class : new FormControl('', Validators.required)

    });
  }
  add() {
    this.apService.Ajout(this.list.value).subscribe((res: any) => {
      console.log(res);
      this.addimg(res._id)
    });
      };
      fileProgress(event) {
        this.fileToUpload =<File>event.target.files[0];
      }
            addimg(j){
      const  formData = new FormData();
      formData.append("file",this.fileToUpload);
      this.apService.upfile(j,formData).subscribe(res=>{
        console.log(res);
        
      })

            }


}
