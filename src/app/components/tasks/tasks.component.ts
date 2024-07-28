import { Component, Input } from '@angular/core';
import { objected } from '../users/users.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input({ required: true }) clickedValues?: objected;
}
