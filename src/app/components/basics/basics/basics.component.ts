import { Component, OnInit } from '@angular/core';
import { BasicsModel } from '../basics.model';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent implements OnInit {
  search = ""
  constructor() {}

  ngOnInit(): void {
  

  }


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
    },
    lifecycleHooks: {
      name: 'Lifecycle hooks',
      path: 'lifecycle-hooks',
    },
    units: {
      name: 'Jednostki',
      path: 'units',
    },
    accesibility: {
      name: 'Accessibility',
      path: 'accessibility',
    },
    directives:{
      name: "directives",
      path: "directives"
    }
  };
  get filteredItems(): { [key: string]: BasicsModel } {
    console.log(Object.keys(this.basics))
    return Object.keys(this.basics)
      .filter(key => this.basics[key].name.toLowerCase().includes(this.search.toLowerCase()))
      .reduce((res, key) => ({ ...res, [key]: this.basics[key] }), {});
  }
}