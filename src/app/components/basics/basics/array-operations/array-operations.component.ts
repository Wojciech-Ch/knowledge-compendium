import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-operations',
  templateUrl: './array-operations.component.html',
  styleUrls: ['./array-operations.component.css'],
})
export class ArrayOperationsComponent implements OnInit {
  task1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  task2 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Carol', age: 30 },
  ];

  task1Map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  task2Map = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
  ];

  task1Reduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  task2Reduce = [
    { name: 'pen', price: 1.5 },
    { name: 'book', price: 5 },
    { name: 'lamp', price: 7.5 },
  ];

  task1Concat = [1, 2, 3, 4, 5, 6];
  task1Concat1 = [7, 8, 9, 10];


  task1Result: any;
  task2Result: any;
  task1MapResult: any;
  task2MapResult: any;
  task1ReduceResult: any;
  task2ReduceResult: any;
  task3ReduceResult: any;
  task1ConcatResult: any;

  constructor() {
  
}

  ngOnInit(): void {
    this.filterEvenNumbers(this.task1);
    this.filterAdultsWhichNameStartsWithA(this.task2);
    this.mapSquaredNumbers(this.task1Map);
    this.creatingStringArray(this.task2Map);
    this.sumOfAllNumbersInArray(this.task1Reduce);
    this.sumOfAllPricesInArrayOfObjects(this.task2Reduce);
    this. combiningTwoArrays(this.task1Concat, this.task1Concat1)
   
  }

  filterEvenNumbers(array: number[]) {
    this.task1Result = array.filter((el) => el % 2 === 0);
  }

  filterAdultsWhichNameStartsWithA(array: { name: string; age: number }[]) {
    this.task2Result = array.filter(
      (el) => el.age > 18 && el.name.startsWith('A')
    );
    console.log(this.task2Result);
  }

  mapSquaredNumbers(array: number[]) {
    array = array.map((el) => el * el);
    this.task1MapResult = array;
  }

  creatingStringArray(array: { name: string; age: number }[]) {
    this.task2MapResult = array.map(
      (el) => `My name is ${el.name} and I am ${el.age} years old`
    );
  }

  sumOfAllNumbersInArray(array: number[]) {
    this.task1ReduceResult = array.reduce((acc, el) => acc + el, 0);
  }
  sumOfAllPricesInArrayOfObjects(array: { name: string; price: number }[]) {
    this.task2ReduceResult = array.reduce((acc, el) => acc + el.price, 0);
    this.task3ReduceResult = array.map(
      (e) => `I bought ${e.name} for ${e.price}`
    );
    console.log(this.task3ReduceResult);
  }

  combiningTwoArrays(array1:number[], array2:number[]){
this.task1ConcatResult = array1.concat(array2)
  }

 
}
