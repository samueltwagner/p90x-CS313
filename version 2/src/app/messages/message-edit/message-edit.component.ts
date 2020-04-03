import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Message } from 'src/app/messages/message.model';
import { MessagesService } from '../messages.service';
import { Contact } from 'src/app/contacts/contact.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subjectInput', {static: false}) subjectInputRef:ElementRef;
  @ViewChild('messageInput', {static: false}) messageInputRef:ElementRef;
  @Output() messageSent = new EventEmitter<Message>();
  
currentSender = new Contact(
  '',
  '',
  '101',
  'Sam Wagner',
  'wag12006@byui.edu',
  '843-729-3894',
  null
);
 
  constructor(private messagesService : MessagesService) { }

  ngOnInit() {
  }

  onSendMessage(){
    const subjectInput = this.subjectInputRef.nativeElement.value;
    const messageInput = this.messageInputRef.nativeElement.value;
    const newMessage = new Message("1", subjectInput, messageInput, null, null);
    this.messagesService.addMessage(newMessage);
  }

  onClearMessage(){
    this.subjectInputRef.nativeElement.value = '';
    this.messageInputRef.nativeElement.value = '';
  }
}
