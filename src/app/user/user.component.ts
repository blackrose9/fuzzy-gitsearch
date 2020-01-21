import { Component, OnInit } from "@angular/core";
import { HTTPService } from '../http.service';

@Component({
   selector: "app-user",
   templateUrl: "./user.component.html",
   styleUrls: ["./user.component.css"]
})

export class User implements OnInit {
   user: any
   username: string
   repos: any

   constructor(private httpService: HTTPService) {
      
      // subscribes to the observable to get data
      this.httpService.getProfile().subscribe(res => {
         console.log(res)
         this.user = res
      })

      this.httpService.getRepo().subscribe(res => {
         console.log(res)
         this.repos = res
      })
   }

   // this function get's name from search and requests the service for the profile and repo
   getName() {
      this.httpService.getUser(this.username)
      this.httpService.getProfile().subscribe(res => {
         // test whether user profile is being picked from the service
         console.log(res)
         this.user = res
      })

      this.httpService.getRepo().subscribe(res => {
         // test whether repo is being picked from the service
         console.log(res)
         this.repos = res
      })
   }

   ngOnInit() {}
}