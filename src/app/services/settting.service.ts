import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetttingService {

  public linkTheme = document.querySelector('#theme');

  constructor() {
    // console.log('SetttingService arranco');
    // href="./assets/css/colors/purple-dark.css"

    const defaultUrl = `./assets/css/colors/default.css`;
    const urlStorage = localStorage.getItem('theme');
    
    if(urlStorage != null) {
      // console.log('urlStorage-true::: ',urlStorage);
      this.linkTheme.setAttribute('href', urlStorage);
    } else {
      // console.log('urlStorage-false::: ',defaultUrl);
      this.linkTheme.setAttribute('href', defaultUrl);
    }

   }

   changeTheme(theme: string){
    const url = `./assets/css/colors/${ theme }.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    // const links = document.querySelectorAll('.selector');
    // console.log('links',links);

    const links = document.querySelectorAll('.selector');;

    links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if( btnThemeUrl === currentTheme ){
        elem.classList.add('working');
      }

    });
  }
}
