import { Injectable } from '@angular/core';
import { Post } from './Models/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  [x: string]: any;

  myApi: string = 'assets/db.json';

  constructor() { }

  getPost(): Promise<Post[]> {
    return fetch(this.myApi).then(response => response.json());
  }
}
