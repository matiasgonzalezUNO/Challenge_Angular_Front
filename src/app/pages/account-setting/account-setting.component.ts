import { Component, OnInit } from '@angular/core';
import { SetttingService } from 'src/app/services/settting.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {

  constructor( private settingService: SetttingService) { }

  ngOnInit(): void {  
    this.settingService.checkCurrentTheme();
  }

  changeTheme(theme: string){
    this.settingService.changeTheme(theme);
  }

}
