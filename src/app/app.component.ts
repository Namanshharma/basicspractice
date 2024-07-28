import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy_users';
import { objected } from './components/users/users.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
  clickedValuesOfUsers ?: objected;

  onselectedId(targetedValues: objected) {
    console.log(targetedValues);
    this.clickedValuesOfUsers = targetedValues;
  }
}
