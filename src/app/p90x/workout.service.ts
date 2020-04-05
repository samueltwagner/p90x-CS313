import { Injectable, EventEmitter } from '@angular/core';
import { Workout } from './workout.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root'})

export class WorkoutService {
  workoutListChangedEvent = new Subject<Workout[]>();
  private workouts: Workout[] = [];

  constructor(private http: HttpClient) { }

  sortAndSend() {
    this.workouts.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.workoutListChangedEvent.next(this.workouts.slice());
  }

  //GET
  getWorkouts() {
    this.http.get<{ message: string, workouts: Workout[] }>
      ('http://localhost:3000/workouts')
      .subscribe(
        (workoutData) => {
          this.workouts = workoutData.workouts;
          this.sortAndSend();
          console.log("This is in the service" + workoutData);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getWorkout(id: string): Workout {
    for (const workout of this.workouts){
      if (workout.id === id) {
        return workout;
      }
    }
    return null;
  }

  //POST
  addWorkout(newWorkout: Workout){
    if (!newWorkout) {
      return;
    }
    else {
      newWorkout.id = "";
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      //add to database
      this.http.post<{ message: string, workout: Workout }>
        ('http://localhost:3000/workouts',
          newWorkout,
          { headers: headers })
        .subscribe(
          (responseData) => {
            //add new document to documents
            this.workouts.push(responseData.workout);
            this.sortAndSend();
          }
        );
    }
  }

  //PUT/UPDATE
  updateWorkout(originalWorkout: Workout, newWorkout: Workout){
    if (!originalWorkout  ||  !newWorkout){
      return;
    }
    const pos = this.workouts.indexOf(originalWorkout);
    if ( pos < 0 ){
      console.log("No negative indexes");
      return;
    }
    newWorkout.id = originalWorkout.id;
    newWorkout._id = originalWorkout._id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //update database
    this.http.put('http://localhost:3000/workouts' + originalWorkout.id,
      newWorkout, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.workouts[pos] = newWorkout;
          this.sortAndSend();
        }
      )
  }
  
  //DELETE
  deleteWorkout(workout: Workout) {
    if (workout === null || workout === undefined) {
      return;
    }
    const pos = this.workouts.indexOf(workout);
    if (pos < 0) {
        return;
    }
    this.http.delete('http://localhost:3000/workouts' + workout.id)
      .subscribe(
        (response: Response) => {
          this.workouts.splice(pos, 1);
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