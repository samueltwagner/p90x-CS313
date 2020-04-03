import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Contact } from '../contact.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Contact = null;
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  hasGroup: boolean = false;
  id: string;
  originalContact: Contact;
  invalidGroupContact: boolean = false;

  constructor(private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = params['id'];
            
            if ( this.id == null || this.id == undefined) {
              return this.editMode = false;
            }
  
            this.originalContact = this.contactService.getContact(this.id);
  
            if ( this.originalContact== null || this.originalContact == undefined){
              return;
            }
  
            this.editMode = true;
            this.contact = JSON.parse(JSON.stringify(this.originalContact));
          }
        );
    }

    onSubmit(form: NgForm) {
      // get values from form’s fields
      const value = form.value;
      const newContact = new Contact('', '', value.name, value.email, value.phone, value.imageUrl, this.groupContacts);
      if(this.editMode == true) {
       this.contactService.updateContact(this.originalContact, newContact);
     }
     else {
       this.contactService.addContact(newContact);
     }
     this.router.navigate(['/contact']);
   }

   onCancel(){
    this.router.navigate(['/contact']);
  }

  isInvalidContact(newContact: Contact){
    if(!newContact){
      return true;
    }

    if(newContact.id === this.contact.id){
      return true;
    }

    for (let i = 0; i < this.groupContacts.length; i++){
      if (newContact.id === this.groupContacts[i].id) {
        return true;
      }
    }
    return false;
  }

  addToGroup($event: any) {
    const selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);
    if (this.invalidGroupContact){
      return;
    }
    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;
  }

  onRemoveItem(idx: number){
    if (idx < 0 || idx >= this.groupContacts.length){
      return;
    }
      this.groupContacts.splice(idx, 1);
      this.invalidGroupContact = false;
  }

}
