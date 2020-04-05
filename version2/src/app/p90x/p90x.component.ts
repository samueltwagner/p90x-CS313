import { Component, OnInit } from '@angular/core';
import { Workout } from './workout.model';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'p90x',
  templateUrl: './p90x.component.html',
  styleUrls: ['./p90x.component.css']
})
export class p90xComponent implements OnInit {

  // selectedContact: Contact;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    // this.contactService.contactSelectedEvent.subscribe(
    //   (contact: Contact) => {
    //     this.selectedContact = contact;
    //   }
    // )
  }
}
