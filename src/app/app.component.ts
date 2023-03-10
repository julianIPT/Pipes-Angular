import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private primeNGconfig: PrimeNGConfig){}
  ngOnInit() {
    this.primeNGconfig.ripple = true;
  }

nombre:string= 'JuLiAn';
valor: number=1000;
obj={
  nombre: 'julian'
}



mostrarNombre(){
  console.log(this.nombre);
  console.log(this.valor);
  console.log(this.obj);
}
}
