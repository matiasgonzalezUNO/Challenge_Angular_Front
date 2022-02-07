import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthenticationService } from 'src/app/services/login-authentication.service';
import { RememberUserService } from 'src/app/services/remember-user.service';

declare function customInitFunction();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showPWD: boolean = false;
  checkboxChecked: boolean = false;

  constructor(
    private router: Router,
    private rememberUserService: RememberUserService,
    private loginAuthenticationService: LoginAuthenticationService
  ) {}

  ngOnInit(): void {
    const getSavedUser = this.rememberUserService.getUser();
    console.log('getSavedUser: ', JSON.stringify(getSavedUser));
    const remember = document.getElementById(
      'checkbox-signup'
    ) as HTMLInputElement;
    if (getSavedUser) {
      remember.checked = true;
      this.checkboxChecked = true;
      const inputUsername = document.getElementById(
        'myInput-Username'
      ) as HTMLInputElement;
      inputUsername.value = getSavedUser;
    } else {
      remember.checked = false;
    }
  }

  login(): void {
    console.log('LoginComponent ngOnInit():::call=>customInitFunction()');

    const inputUsername = document.getElementById(
      'myInput-Username'
    ) as HTMLInputElement;
    const inputPassword = document.getElementById(
      'myInput-Password'
    ) as HTMLInputElement;
    if (inputUsername.value.length > 1 && inputPassword.value.length > 1) {
      const userAndPass = {
        user: inputUsername.value,
        password: inputPassword.value,
      };
      this.loginAuthenticationService.loginUser(userAndPass).subscribe(
        (result) => {
          console.log(
            'loginAuthenticationService.getTest().subscribe((result)',
            result
          );
          this.rememberUserService.RememberLoginUser(JSON.stringify(result));
          this.checkboxChange(true);
          this.router.navigateByUrl('/dashboard');
          alert('login successful');
        },
        (error) => {
          console.log(
            'loginAuthenticationService.getTest().subscribe((error)',
            error
          );
          alert('login error: ' + JSON.stringify(error.error));
        }
      );
    } else {
      alert('Complet User and Password');
    }
  }

  ShowPassword(): void {
    this.showPWD = !this.showPWD;
  }

  checkboxChange(isLogin: boolean): void {
    if (!isLogin) {
      this.checkboxChecked = !this.checkboxChecked;
    }

    const remember = document.getElementById(
      'myInput-Username'
    ) as HTMLInputElement;

    console.log('remember: ', remember.value);

    if (this.checkboxChecked && remember.value.length > 1) {
      this.rememberUserService.RememberUser(remember.value);
      console.log('call remember- ');
    } else {
      console.log('call forget- ');
      this.rememberUserService.forgetUser();
      remember.value = '';
    }
  }
}
