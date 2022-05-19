import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  // Register
  register(uname: any, userid: any, pswd: any) {

    const data = {
      uname, userid, pswd
    }
    return this.http.post('http://localhost:3000/register', data)

  }

  // Login
  login(userid: any, pswd: any) {

    const data = {
      userid, pswd
    }
    return this.http.post('http://localhost:3000/login', data)
  }

  // Add Event

  addEvent(userid: any, date: any, descr: any) {
    const data = {
      userid, date, descr
    }

    return this.http.post('http://localhost:3000/addEvent', data)
  }

  // View Event

  viewEvent(userid: any) {
    const data = {
      userid
    }
   return this.http.post('http://localhost:3000/viewEvent', data)
  }



}
