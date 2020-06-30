import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import io from "socket.io-client";
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = environment.baseUri;
  socket;
  constructor(private router: Router, private http: HttpClient) {
    this.socket = io();
   }
comnt(j,data){
  const url = `${this.baseUrl}/comment/commentaire/${j}`;
    return this.http.put(url,data);
}
getcomnt(id){
  const url = `${this.baseUrl}/comment/getcommentaire/${id}`;
  return this.http.get(url);
  
}
}