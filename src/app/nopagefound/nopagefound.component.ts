import { Component, OnInit } from '@angular/core';
import { RememberUserService } from '../services/remember-user.service';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css'],
})
export class NopagefoundComponent implements OnInit {
  year = new Date().getFullYear();
  constructor(private rememberUserService: RememberUserService) {}

  ngOnInit(): void {}

  GoToLogin(): void {
    this.rememberUserService.forgetLoginUser();
  }
}
