import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task1Service {

  constructor() { }  
  
  add(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
    }
}
