import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  @Input({ required: true }) user!: objected;
  @Output() select = new EventEmitter<objected>();

  onSelectionOfUser() {
    this.select.emit(this.user);
  }
  get ImagePath() {
    return `/assets/users/${this.user.avatar}`;
  }
}

export interface objected {
  id: string;
  name: string;
  avatar: string;
}
