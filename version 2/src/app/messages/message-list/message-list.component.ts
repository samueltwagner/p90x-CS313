import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  messages: Message[] = [];

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.messagesService.getMessages();
    this.subscription = this.messagesService.messageChangeEvent
    .subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }

  onAddMessage(message: Message){
    this.messages.push(message);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}