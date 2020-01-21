import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { UserDetails } from './userdetails';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HTTPService {
  username: string
  clientid = '656c51d0041d740f37dd'
  clientsecret = '62b73b761b96a0d15283d05d8d3f9d41e0813220'

  constructor(private http: HttpClient) {
    this.username = "blackrose9"
  }
  
  getProfile() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }
  getRepo() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }
// gets username from search box and updates "username"
  getUser(username: string) {
    this.username = username
  }
}

// promise giving an (in promise) error
  // user: UserDetails;
  // constructor(private http:HttpClient) {
  //   this.user = new UserDetails("","",0,"");
  // }

  // httpRequest(username){
  //   // interface ApiResponse{
  //   //   name: string;
  //   //   avatar_url: string;
  //   //   public_repos: number;
  //   //   html_url: string;
  //   }
  //   // // let promise = new Promise((resolve, reject) => {
  //   //   this.http.get<ApiResponse>("https://api.github.com/users/"+username+"?access_token="+environment.accessToken).toPromise().then(response => {
  //   //     this.user.name = response.name
  //   //     this.user.avatar_url= response.avatar_url
  //   //     this.user.public_repos = response.public_repos
  //   //     this.user.html_url=response.html_url

  //   //     // resolve()
  //   //   },
  //   //     error => {
  //   //       this.user.name = "No name is found"
  //   //       this.user.avatar_url = "No profile picture"
  //   //       this.user.public_repos = 0
  //   //       this.user.html_url= "Not found"

  //   //       // reject(error)
  //   //     })
  //   // })
  //   // return promise
  // }
