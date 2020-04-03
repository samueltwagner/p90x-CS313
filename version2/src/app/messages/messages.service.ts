import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

@Injectable({ providedIn: 'root' })

export class MessagesService {
  messageChangeEvent = new Subject<Message[]>();
  private messages: Message[] = [];

  constructor(private http: HttpClient) { }

  sortAndSend() {
    this.messages.sort((a, b) => (a.subject > b.subject) ? 1 : ((b.subject > a.subject) ? -1 : 0));
    this.messageChangeEvent.next(this.messages.slice());
  }

  //GET
  getMessages() {
    this.http.get<{ messages: any, documents: Document[] }>
      ('http://localhost:3000/messages')
      .subscribe(
        (messageData) => {
          this.messages = messageData.messages;
          this.sortAndSend();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getMessage(messageId: string): Message {
    for (const message of this.messages){
      if (message.id === messageId) {
        return message;
      }
    }
    return null;
  }

  //POST
  addMessage(newMessage: Message){
    if (!newMessage){
      return;
    }
    else {
      newMessage.id = "";
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      //add to database
      this.http.post<{ message: any, document: Document }>
        ('http://localhost:3000/messages',
          newMessage,
          { headers: headers })
        .subscribe(
          (responseData) => {
            //add new document to documents
            this.messages.push(responseData.message);
            this.sortAndSend();
          }
        );
    } 
  }
}
  // fetchMessages() {
  //   return this.http
  //     .get<Message[]>(
  //       'https://samueltwagner-cms.firebaseio.com/messages.json'
  //     )
  //     .subscribe((messages: Message[]) => {
  //       this.messages = messages;
  //       this.maxMessageId = this.getMaxId();
  //       this.messages.sort((a, b) => (a.id < b.id) ? 1 : (a.id > b.id) ? -1 : 0);
  //       this.messageChangeEvent.next(this.messages.slice());
  //       },
  //     (error: any) => {
  //       console.log(error);
  //       }
  //     )
  // }

  // storeMessages() {
  //   this.messages = JSON.parse(JSON.stringify(this.messages));
  //   const header = new HttpHeaders({'Content-Type': 'json'});
  //   this.http
  //     .put('https://samueltwagner-cms.firebaseio.com/messages.json', this.messages, {headers: header})
  //     .subscribe((returnedMessages: Message[]) => {
  //       this.messageChangeEvent.next(returnedMessages.slice());
  //     });
  // }

  // getMaxId(): number {
  //   let maxId = 0;
  //   for (let message of this.messages) {
  //     let currentId = +message.id;
  //       if (currentId > maxId) {
  //         maxId = currentId;
  //       }
  //       return maxId;
  //   }
  // }

