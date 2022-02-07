import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RememberUserService {
  constructor() {}

  RememberUser(User: string) {
    localStorage.setItem('savedUser', User);
  }

  forgetUser() {
    localStorage.removeItem('savedUser');
  }

  getUser(): string {
    return localStorage.getItem('savedUser');
  }

  RememberLoginUser(User: string) {
    localStorage.setItem('loginUser', User);
  }

  forgetLoginUser() {
    localStorage.removeItem('loginUser');
  }

  getLoginUser(): string {
    return localStorage.getItem('loginUser');
  }
}
