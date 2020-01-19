import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { User } from './user/user.component';
import { Repository } from './repository/repository-component';
import { SearchComponent } from './search.component';
import { UserDetails } from './userdetails';

@NgModule({
  declarations: [
    AppComponent,
    User,
    Repository
    // SearchComponent
    // UserDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
