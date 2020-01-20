import { Injectable } from "@angular/core";
import { RepositoryDetails } from './repositorydetails';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root'
})

export class HttpRepoService{
   repository: RepositoryDetails;
   constructor(private http:HttpClient){
      this.repository = new RepositoryDetails("","", new Date());
   }

   httpRepoRequest(){
      interface ApiResponse {
         name: string;
         html_url: string;
         created_at: Date;
      }
      let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/blackrose9/repos?access_token=" + environment.accessToken).toPromise().then(response => {
         this.repository.name = response.name
         this.repository.html_url = response.html_url
         this.repository.created_at = response.created_at

         resolve()
      },

         error =>{
            this.repository.name="RepoName not found"
            this.repository.html_url="No repo URL found"
            this.repository.created_at=new Date

            reject(error)
         })
      })
      return promise
   }
}