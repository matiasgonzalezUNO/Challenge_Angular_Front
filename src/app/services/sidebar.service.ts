import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      rol: 'all',
      subMenu: [
        { titulo: 'Dash main', url: '/dashboard' },
        { titulo: 'Grafica', url: '/dashboard/grafica1' },
        { titulo: 'Promesas', url: '/dashboard/promesas' },
        { titulo: 'ProgressBar', url: '/dashboard/progress' },
        { titulo: 'Rxjs', url: '/dashboard/Rxjs' },
      ],
    },
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      rol: 'admin',
      subMenu: [
        { titulo: 'Dash main', url: '/dashboard' },
        { titulo: 'Grafica', url: '/dashboard/grafica1' },
        { titulo: 'Promesas', url: '/dashboard/promesas' },
      ],
    },
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      rol: 'user',
      subMenu: [
        { titulo: 'Dash main', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/dashboard/progress' },
        { titulo: 'Rxjs', url: '/dashboard/Rxjs' },
      ],
    },
  ];

  constructor() {}
}
