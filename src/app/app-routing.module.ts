import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User } from './user/user.component';


const routes: Routes = [
  { path: 'user/:username', component: User }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
