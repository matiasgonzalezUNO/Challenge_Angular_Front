import { Component, OnInit } from '@angular/core';
import { RememberUserService } from 'src/app/services/remember-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor(private rememberUserService: RememberUserService) {}

  ngOnInit(): void {}

  CleanLocalStorage(): void {
    this.rememberUserService.forgetLoginUser();
  }
}
