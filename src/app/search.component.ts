import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
   selector: "app-search",
   template: `
   <form>
    <div class="form-group">
       <input type="text" name="username" #username class="form-control" placeholder="Search for Github Username" required/>
    </div>
    <button type="submit" class="btn btn-primary" (click)=goToUrl(username.value)><i class="fa fa-search"></i>Search</button>
 </form>
`
})

export class SearchComponent implements OnInit{
   // goes to the searched for username when button is clicked and goToUrl function is run
   goToUrl(username){
      this.router.navigate(['/profile',username])
    }

   constructor(private router:Router){}
   ngOnInit(){}
}