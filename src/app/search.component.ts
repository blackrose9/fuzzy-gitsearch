import { Component } from "@angular/core";

Component({
   selector: "app-search",
   template: `
   <form>
   <div class="form-group">
      <input type="text" name="search" id="search" class="form-control" placeholder="Search for Github Username" required/>
   </div>
   <button type="submit" class="btn btn-primary" (click)=goToUrl(username.value)><i class="fa fa-search"></i>Search</button>
   </form>
`
})

export class SearchComponent {

}