import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Login} from '../models/login';
import {File} from '../models/file';
import {User} from '../models/user';

@Injectable()
export class MediaService {

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  loggedIn = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media');
  }

  newUser(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  login(user) {
    this.isLoggedIn(true);
    this.http.post<Login>(this.apiUrl + '/login', user).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['front']);
      console.log('Kirjautuminen onnistui' + response);
    }, (error: HttpErrorResponse) => {
      this.router.navigate(['login']);
      console.log('Kirjautuminen epäonnistui ' + error.message + '--' + error.name);
    });
  }

  getUserData(token) {
    const options = {
      headers: new HttpHeaders().set('x-access-token', token)
    };
    return this.http.get(this.apiUrl + '/users/user', options);
  }

  getUsername(token, id) {
    const options = {
      headers: new HttpHeaders().set('x-access-token', token)
    };
    return this.http.get<User>(this.apiUrl + '/users/' + id, options);
  }

  getNew() {
    return this.http.get(this.apiUrl + '/media?limit=500');
  }

  getOneFile(id) {
    return this.http.get<File>(this.apiUrl + '/media/' + id);
  }

  uploadData(token, file) {
    const options = {
      headers: new HttpHeaders().set('x-access-token', token)
    };
    return this.http.post(this.apiUrl + '/media', file, options);
  }

  isLoggedIn(bool) {
    this.loggedIn = bool;
  }

}
