import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AddComponent } from "./todo/add/add.component";
import { ListComponent } from "./todo/list/list.component";
import { GuardGuard } from "./guard.guard";


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "add", component: AddComponent, canActivate: [GuardGuard] },
  { path: "list", component: ListComponent, canActivate: [GuardGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
