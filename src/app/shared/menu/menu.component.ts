import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  items: MenuItem[] =[];

  constructor(){}

  ngOnInit():void {
    this.items = [
      {
        label:'pipes de angular',
        icon:'pi pi-desktop',
        items:[
          {
            label:'textos y fechas',
            icon:'pi pi-align-left',
            routerLink:'/'
          },
          {
            label:'Numeros',
            icon:'pi pi-dollar',
            routerLink:'numeros'
          },
          {
            label:'No comunes',
            icon:'pi pi-globe',
            routerLink:'no-comunes'
          }]
      },
      {
        label:'pipes personalizados',
        icon:'pi pi-cog',
        routerLink:'ordenar'

      }
    ];
  }
}
