import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  // baseUri = 'http://localhost:3000';
  baseUrl = environment.baseUri;
  responseData = localStorage.getItem('token');
  constructor(private router: Router, private http: HttpClient) { }
  
  reg(register) {
    const url = `${this.baseUrl}/users/register/register`;
    console.log(register);
    this.router.navigateByUrl('/login');
    return this.http.post(url, register);
  }
  signin(data) {
    const url = `${this.baseUrl}/users/login/login2`;
    console.log(data);
    this.router.navigateByUrl('/add');
      return this.http.post(url, data);
      }
      Ajout(data) {
        const url = `${this.baseUrl}/todos/inserttodo`;
        console.log(data);
        return this.http.post(url, data);
      }
      getall() {
        const url =`${this.baseUrl}/todos/findall`;
        return this.http.get(url);
      }  
      delete(j){
        const url =`${this.baseUrl}/todos/removedata/${j}`;
        return this.http.delete(url);
   }
   update(j,data){
     const url =`${this.baseUrl}/todos/putdata/${j}`;
     return this.http.put(url,data);
   }
   upfile(j,image){
     const url=`${this.baseUrl}/image/todo/upfile/${j}`;
     return this.http.post(url,image)
   }
    getOne(j){
      const url=`${this.baseUrl}/todos/finddata/${j}`;
      return this.http.get(url);
    }
}

