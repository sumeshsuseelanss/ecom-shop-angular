import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  
  subject = new Subject()

  messageEmitter = new EventEmitter<String>(); 

  constructor() { }

  sendMsg(product){
      this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }

}
