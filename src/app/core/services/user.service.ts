import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    private httpRequestHeaders: HttpHeaders = new HttpHeaders({'No-Auth': 'True'})

    registerUser(signUpModel: any) {
      return this.httpClient.post("http://18.188.123.203:8083/security/userDetails/register", signUpModel, {headers: this.httpRequestHeaders});
    }

    // signInUser(signInModel: any) {
    //   return this.httpClient.post("http://18.188.123.203:8082/login", signInModel);
    // }
    signInUser(signInModel: any) {
      return this.httpClient.post("http://18.188.123.203:8083/login", signInModel, {headers: this.httpRequestHeaders, observe: 'response'});
    }

    getUserDetails(userEmail: any) {
      return this.httpClient.post("http://18.188.123.203:8083/security/userDetails/getUserDetails", userEmail);

    }

  }
