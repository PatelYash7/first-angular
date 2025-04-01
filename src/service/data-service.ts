import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  message!: string;
  setMessage(message: string) {
    console.log(message)
    this.message = message;
  }
  getMessage() {
    console.log(this.message)
    return this.message;
  }
}