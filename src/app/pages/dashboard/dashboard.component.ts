import { Component, OnInit } from '@angular/core';
import { RememberUserService } from 'src/app/services/remember-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  userRol: any;
  constructor(private rememberUserService: RememberUserService) {}

  ngOnInit(): void {
    this.userRol = JSON.parse(this.rememberUserService.getLoginUser());
  }
}
