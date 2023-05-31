import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {

  postArr: Post[] = []

  constructor(private postService: PostService) {
    this.postService.getPost().then(post => {
      let filtroPost = post.filter(p => !p.active);
      this.postArr = filtroPost
    })
  }
}
