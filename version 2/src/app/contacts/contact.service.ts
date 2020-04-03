import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root'})

export class ContactService {
  contactListChangedEvent = new Subject<Contact[]>();
  private contacts: Contact[] = [];

  constructor(private http: HttpClient) { }

  sortAndSend() {
    this.contacts.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.contactListChangedEvent.next(this.contacts.slice());
  }

  //GET
  getContacts() {
    this.http.get<{ message: string, contacts: Contact[] }>
      ('http://localhost:3000/contacts')
      .subscribe(
        (contactData) => {
          this.contacts = contactData.contacts;
          this.sortAndSend();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getContact(id: string): Contact {
    for (const contact of this.contacts){
      if (contact.id === id) {
        return contact;
      }
    }
    return null;
  }

  //POST
  addContact(newContact: Contact){
    if (!newContact) {
      return;
    }
    else {
      newContact.id = "";
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      //add to database
      this.http.post<{ message: string, contact: Contact }>
        ('http://localhost:3000/contacts',
          newContact,
          { headers: headers })
        .subscribe(
          (responseData) => {
            //add new document to documents
            this.contacts.push(responseData.contact);
            this.sortAndSend();
          }
        );
    }
  }

  //PUT/UPDATE
  updateContact(originalContact: Contact, newContact: Contact){
    if (!originalContact  ||  !newContact){
      return;
    }
    const pos = this.contacts.indexOf(originalContact);
    if ( pos < 0 ){
      console.log("No negative indexes");
      return;
    }
    newContact.id = originalContact.id;
    newContact._id = originalContact._id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //update database
    this.http.put('http://localhost:3000/contacts/' + originalContact.id,
      newContact, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.contacts[pos] = newContact;
          this.sortAndSend();
        }
      )
  }
  
  //DELETE
  deleteContact(contact: Contact) {
    if (contact === null || contact === undefined) {
      return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
        return;
    }
    this.http.delete('http://localhost:3000/contacts/' + contact.id)
      .subscribe(
        (response: Response) => {
          this.contacts.splice(pos, 1);
          this.sortAndSend();
        }
      );
  }
}

  // fetchContacts(){
  //   return this.http
  //   .get<Contact[]>(
  //     'https://samueltwagner-cms.firebaseio.com/contacts.json'
  //   )
  //   .subscribe((contacts: Contact[]) => {
  //     this.contacts = contacts;
  //     this.maxContactId = this.getMaxId();
  //     this.contacts.sort((a, b) => (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0);
  //     this.contactListChangedEvent.next(this.contacts.slice());
  //     },
  //   (error: any) => {
  //     console.log(error);
  //     }
  //   )
  // }

  // storeContacts() {
  //   this.contacts = JSON.parse(JSON.stringify(this.contacts));
  //   const header = new HttpHeaders({'Content-Type': 'json'});
  //   this.http
  //     .put('https://samueltwagner-cms.firebaseio.com/contacts.json', this.contacts, {headers: header})
  //     .subscribe((returnedContacts: Contact[]) => {
  //       this.contactListChangedEvent.next(returnedContacts.slice());
  //     });
  // }

  // getMaxId(): number {
  //   let maxId = 0;
  //   for (let contact of this.contacts) {
  //     let currentId = +contact.id;
  //       if (currentId > maxId) {
  //         maxId = currentId;
  //       }
  //       return maxId;
  //   }
  // }