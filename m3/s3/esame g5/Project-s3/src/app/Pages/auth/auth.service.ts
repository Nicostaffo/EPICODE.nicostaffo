import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { AccessData } from 'src/app/Interfaces/access-data';
import { LogInData } from 'src/app/Interfaces/log-in-data';
import { RegisterData } from 'src/app/Interfaces/register-data';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  apiUrl = environment.apiURL;

  private authSubject = new BehaviorSubject<null | AccessData>(null);

  user$ = this.authSubject.asObservable();

  isLoggedIn$ = this.user$.pipe(map(dato => Boolean(dato)))

  authLogoutTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.restoreUser()
  }

  login(data: LogInData) {
    return this.http.post<AccessData>(this.apiUrl + '/login', data)
      .pipe(tap(data => {

        this.authSubject.next(data);

        localStorage.setItem('user', JSON.stringify(data));
        const endDate = this.jwtHelper
          .getTokenExpirationDate(data.token) as Date
      }),
      )
  }
  restoreUser() {
    const userSigned = localStorage.getItem('user');
    if (!userSigned) {
      return
    }
    const user: AccessData = JSON.parse(userSigned);
    if (this.jwtHelper.isTokenExpired(user.token)) {
      return;
    }
  }

  signUp(data: RegisterData) {
    return this.http.post<AccessData>(this.apiUrl + '/register', data);
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth', 'login'])
    if (this.authLogoutTimer) {
      clearTimeout(this.authLogoutTimer)
    }
  }
  autoLogOut(axpDate: Date) {
    const exit = axpDate.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(() => {
      this.logout()
    }, exit)
  }
}
