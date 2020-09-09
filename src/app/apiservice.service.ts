import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiserviceService {
  baseUrl = environment.baseUri;
  responseData = localStorage.getItem("token");
  constructor( private http: HttpClient) {}
  reg(register) {
    const url = `${this.baseUrl}/register/register`;
    return this.http.post(url, register);
  }
  signin(data) {
    const url = `${this.baseUrl}/login/login`;
    return this.http.post(url, data);
  }
  Ajout(data) {
    const url = `${this.baseUrl}/sujet/add`;
    console.log(data);
    return this.http.post(url, data);
  }
  getall() {
    const url = `${this.baseUrl}/sujet/all`;
    return this.http.get(url);
  }

  getOne(j) {
    const url = `${this.baseUrl}/sujet/getone/${j}`;
    return this.http.get(url);
  }
  update(j) {
    const url = `${this.baseUrl}/sujet/edit/${j}`;
    return this.http.put(url,j);
  }
  delete(j) {
    const url = `${this.baseUrl}/sujet/delete/${j}`;
    return this.http.delete(url);
  }
  sondage(choix, j) {
    const url = `${this.baseUrl}/yesorno/sondage/${j}`;
    return this.http.put(url , choix);
  }
}
