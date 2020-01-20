import { Component, OnInit } from "@angular/core";
import { UserDetails } from '../userdetails';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HTTPService } from '../http.service';

@Component({
   selector: "app-user",
   templateUrl: "./user.component.html",
   styleUrls: ["./user.component.css"]
})

export class User implements OnInit{
   user:UserDetails;

   constructor(private httpService:HTTPService, private route:ActivatedRoute){
      this.httpService = httpService;
   }
   ngOnInit(){
   let username=this.route.snapshot.paramMap.get('username')
   this.httpService.httpRequest(username)
   this.user = this.httpService.user
   }
}