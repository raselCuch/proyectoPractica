import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css'],
})
export class DirectivaComponent {
  valido = true;

  listTS = [1, 2, 3, 4];

  personasTS = [
    { id: 1, name: 'María', lastName: 'Rojas' },
    { id: 2, name: 'Andrea', lastName: 'Arce' },
    { id: 2, name: 'Sofía', lastName: 'Yirum' },
  ];
  validador() {
    return true;
  }
}
