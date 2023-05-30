import { Injectable } from '@angular/core';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getAllUsers() {
    throw new Error('Method not implemented.');
  }
  apiUrl: string = './assets/db.json';
  constructor() {

  }
  getJson(): Promise<User[]> {
    return fetch(this.apiUrl).then(res => res.json());
  }
}
