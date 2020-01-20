import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { UserDetails } from './userdetails';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  user: UserDetails;
  constructor(private http:HttpClient) {
    this.user = new UserDetails("","",0,"");
  }

  httpRequest(username){
    interface ApiResponse{
      name: string;
      avatar_url: string;
      public_repos: number;
      html_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/"+username+"?access_token="+environment.accessToken).toPromise().then(response => {
        this.user.name = response.name
        this.user.avatar_url= response.avatar_url
        this.user.public_repos = response.public_repos
        this.user.html_url=response.html_url

        resolve()
      },
        error => {
          this.user.name = "No name is found"
          this.user.avatar_url = "No profile picture"
          this.user.public_repos = 0
          this.user.html_url= "Not found"

          reject(error)
        })
    })
    return promise
  }
}