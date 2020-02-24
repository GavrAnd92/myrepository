import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }



  getUser(username:string){

    return this.http.get('https://api/github.com/users/'+username)
    .subscribe((response)=>{
        return response;
    },
    (error)=>{console.log(error)});
  }
}
