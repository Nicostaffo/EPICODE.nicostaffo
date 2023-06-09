import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LogInData } from 'src/app/Interfaces/log-in-data';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  constructor(private authSvc: AuthService) { }

  data: LogInData = {
    password: '',
    email: ''
  }
  login() {
    this.authSvc.login(this.data)
      .subscribe(accessData => {
        alert(`log in effettuato come ${accessData.user.name}`)
      })
  }
}
