import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl: string = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get<User[]>(this.apiUrl)
  }

  post(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }

  put(user: User) {
    return this.http.put<User>(this.apiUrl + '/users' + '/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
