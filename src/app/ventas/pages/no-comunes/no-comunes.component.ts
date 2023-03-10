import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

// i18nSelect
  nombre:string= 'julian';
  genero:string='masculino';
  invitacionMap ={
    'masculino': 'invitarlo',
    'femenino' : 'invitarla',
  }

  // i18nPlural
  clientes:string[]= ['maria','pedro','ana','lia','liliana']
  clientesMap ={
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }
  cambiarPersona(){
    this.nombre='melissa'
    this.genero='femenino'
  }
  borrarCliente(){
   this.clientes.pop();
  }

  //KeyValue Pipe
  persona={
    nombre:'julian',
    edad:23,
    direcion:'Ottawa,Canada'
  }

  heroes= [
    {
      nombre:'superman',
      vuela: true,
    },
    {
      nombre:'Robin',
      vuela: false,
    },
    {
      nombre:'Aquaman',
      vuela: false,
    },
  ]

  miObservable = interval(2000) //0, 1,2,3,4,5,6,7,8,9

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('tenemos data en la promesa');
    }, 3500 );
  }
  )

}
