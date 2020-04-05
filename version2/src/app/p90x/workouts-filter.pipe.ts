import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from './workout.model';

@Pipe({
  name: 'workoutFilter'
})
export class workoutFilterPipe implements PipeTransform {

  transform(contacts: Workout[], term: string): any {
    let filteredArray: Workout[] = [];
    
    if(term && term.length > 0){
      filteredArray = contacts.filter(
        (contact: any) => contact.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if(filteredArray.length < 1){
      return contacts;
    }

    return filteredArray;
  }

}
