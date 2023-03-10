import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  nombreLower:string = 'Eduardo';
  nombreUpper:string = 'EDUARDO';
  nombreCompleto:string = 'EdUaRdo jUlIaN';

  fecha: Date = new Date();// el dia de hoy
}
