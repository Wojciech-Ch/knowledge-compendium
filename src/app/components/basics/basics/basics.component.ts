import { Component } from '@angular/core';
import { BasicsModel } from '../basics.model';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent {
  constructor() {}

  basics: { [key: string]: BasicsModel } = {
    basicTypes: {
      name: 'Podstawowe typy',
      path: 'basic-types',
    },
    arrayOperations: {
      name: 'Operacje na arrayach',
      path: 'array-operations',
    },
    dataBinding: {
      name: 'Data binding',
      path: 'data-binding',
    },
    stringOperations: {
      name: 'Operacje na stringach',
      path: 'string-operations',
    },
    forms: {
      name: 'Formularze',
      path: 'forms',
    },
    objectOperations: {
      name: 'Operacje na obiektach',
      path: 'object-operations',
  }
}
}