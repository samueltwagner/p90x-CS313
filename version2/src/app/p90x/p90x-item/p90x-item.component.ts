import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Workout } from '../workout.model';

@Component({
  selector: 'p90x-item',
  templateUrl: './p90x-item.component.html',
  styleUrls: ['./p90x-item.component.css']
})
export class p90xItemComponent implements OnInit {
  @Input() workout: Workout;
  @Output() workoutSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.workoutSelected.emit()
  }
}
