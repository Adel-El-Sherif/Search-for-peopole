import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { UsersService } from './services/users.service';
import { FormControl } from '@angular/forms';

export interface User {
  name: string;
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // begin properties ________
  title = 'search-for-peopel'; 
  users: any;
  userName: any;
  // end properties ________

  constructor(public  _UsersService: UsersService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    /**
     * @description call get all user
    */
    this.getAllUsers()

  }

/**
 * @description get all Users
 */
  getAllUsers() {
    this._UsersService.getAllUsers().subscribe( (response: any) => {
      this.users = response.data
    })
  }

  /**
   * 
   * @param event 
   */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
}
