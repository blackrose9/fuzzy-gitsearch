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
   user:any
   username:string
   repos:any

   constructor(private httpService:HTTPService){
      this.httpService.getProfile().subscribe(res=>{
         console.log(res)
         this.user=res
         
      })

      this.httpService.getRepo().subscribe(res=>{
         console.log(res)
         this.repos=res
         
      })

   }

   getName(){
      this.httpService.getUser(this.username)
      this.httpService.getProfile().subscribe(res=>{
         console.log(res)
         this.user=res
         
      })

      this.httpService.getRepo().subscribe(res=>{
         console.log(res)
         this.repos=res
         
      })


      
   }

   ngOnInit(){
   // let username=this.route.snapshot.paramMap.get('username')
   // this.httpService.httpRequest(username)
   // this.user = this.httpService.user
   // }
}
}