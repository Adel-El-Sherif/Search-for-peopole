import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/modules/users/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  // decorator in a child component or directive signifies that the property can receive its value from its parent component.
  @Input() user: User;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
