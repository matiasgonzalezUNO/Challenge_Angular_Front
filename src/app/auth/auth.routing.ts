import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis componentes
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
