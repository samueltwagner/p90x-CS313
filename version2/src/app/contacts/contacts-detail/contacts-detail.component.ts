import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cms-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  id: string;

  contact: Contact;

  //inject from service
  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.contact = this.contactService.getContact(this.id);
      }
    )};

    onDelete(){
      this.contactService.deleteContact(this.contact);
      this.router.navigate(['/contact'], {relativeTo: this.route}); 
    }

}
