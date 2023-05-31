import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {
  postArr: Post[] = []

  constructor(private postService: PostService) {
    this.postService.getPost().then(post => {
      let filtroPost = post.filter(p => p.active);
      this.postArr = filtroPost
    })
  }
}
