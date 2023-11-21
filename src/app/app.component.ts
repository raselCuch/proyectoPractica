import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // acá se concentran los datos
  //variables
  title = 'proyectoPractica';
  nombre = 'Rasel';
  apellido = 'Cucho';

  urlImg = 'https://cdn-icons-png.flaticon.com/512/1006/1006626.png';

  color = 'blue';
  estado = true;

  numero = 5;

  incrementa() {
    this.numero = this.numero + 1;
  }
  decrementa() {
    this.numero = this.numero - 1;
  }

  //objetos
  persona: any = {
    nombre: 'Rasel',
    apellido: 'Cucho',
  };

  //metodos
  sumador(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }

  numero2 = 0;

  numero3 = 0;
  numero4 = 0;
}
