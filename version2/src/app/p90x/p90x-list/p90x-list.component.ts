import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Workout } from '../workout.model';
import { WorkoutService } from '../workout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'p90x-list',
  templateUrl: './p90x-list.component.html',
  styleUrls: ['./p90x-list.component.css']
})
export class p90xListComponent implements OnInit, OnDestroy {
  @Output() selectedWorkoutEvent = new EventEmitter<Workout>();
  subscription: Subscription;
  term: string;
  
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService.getWorkouts();
    this. subscription = this.workoutService.workoutListChangedEvent
      .subscribe((workoutsList: Workout[]) => { 
        this.workouts = workoutsList;
      });
  }

  onKeyPress(value: string){
    this.term = value;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

  // onContactSelected(contact: Contact){
  //   this.contactService.contactSelectedEvent.emit(contact);
  // }