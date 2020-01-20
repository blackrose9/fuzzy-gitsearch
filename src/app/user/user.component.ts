import { Component, OnInit } from "@angular/core";
import { UserDetails } from '../userdetails';
import { HttpClient } from '@angular/common/http';

@Component({
   selector: "app-user",
   templateUrl: "./user.component.html",
   styleUrls: ["./user.component.css"]
})

export class User implements OnInit{
   user:UserDetails;
   accessToken: "62be22095a7dfeb4f83822b1aebcb3110a57c77b";
   userUrl: "http://api.github.com/users/";

   constructor(private http:HttpClient){}
   ngOnInit(){
      interface APIresponse{
         username:any[];
         avatar_url: any[];
         html_url: any[];
      }
      this.http.get<APIresponse>(this.userUrl).subscribe(data=>{
         this.user = new UserDetails(data.username, data.avatar_url, data.html_url)
      })

   }
}