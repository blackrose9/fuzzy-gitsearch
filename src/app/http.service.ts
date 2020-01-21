import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
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