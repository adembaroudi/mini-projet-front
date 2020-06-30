import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AddComponent } from './todo/add/add.component';
import { ListComponent } from './todo/list/list.component';
import { DisplayComponent } from './todo/display/display.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { CheckpipePipe } from './checkpipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/interceptor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TodoComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    AddComponent,
    ListComponent,
    DisplayComponent,
    SearchpipePipe,
    CheckpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule ,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
