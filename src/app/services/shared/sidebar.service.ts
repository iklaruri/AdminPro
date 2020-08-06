import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo:'Principal',
      icono:'mdi mdi-gauge',
      submenu:[
        {
          titulo:'Dashboard',
          url:'/dashboard'
        },
        {
          titulo:'Progress',
          url:'/progress'
        },
        {
          titulo:'Gráficas',
          url:'/grafics'
        },
      ]
    },
    {
      titulo:'Mantenimientos',
      icono:'mdi mdi-folder-locl-open',
      submenu:[
        {
          titulo:'Usuarios',
          url:'/usuarios'
        },
        {
          titulo:'Hospitales',
          url:'/hospitales'
        },
        {
          titulo:'Médicos',
          url:'/medicos'
        },
      ]
    }
  ]

  constructor() { }
}
