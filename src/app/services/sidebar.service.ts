import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Progres', url: 'progress' },
        { titulo: 'rxjs', url: 'rxjs' },

        { titulo: 'Gráfica', url: 'grafica1' },
      ],
    },
  ];

  constructor() {}
}
