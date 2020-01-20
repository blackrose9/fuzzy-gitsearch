import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { User } from './user/user.component';


const routes: Routes = [
  { path: 'app-search', component: SearchComponent },
  { path: 'user/:username', component: User }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
