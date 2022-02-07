import { Component, OnInit } from '@angular/core';
import { RememberUserService } from 'src/app/services/remember-user.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private sidebarService: SidebarService,
    private rememberUserService: RememberUserService
  ) {
    // this.menuItems = sidebarService.menu;
    // console.log('menus',this.menuItems);

    let userRol = JSON.parse(this.rememberUserService.getLoginUser()).rol;
    console.log(userRol);
    console.log(this.sidebarService.menu);
    this.menuItems = this.sidebarService.menu.filter(
      (opt) => opt.rol == userRol
    );
    console.log(this.menuItems);
  }

  ngOnInit(): void {}
}
