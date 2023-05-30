import { Component } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: any[] = []

  constructor(private userSvc: PostService) {

    userSvc.getAllUsers()
      .then((users:any) => this.users = users);

  }
}
