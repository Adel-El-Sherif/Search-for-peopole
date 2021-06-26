import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  // begin properties ________
  users: User[];
  userName: any;
  private subscriptions: Subscription[] = [];
  // end properties ________

  constructor(private  _UsersService: UsersService) {
  }

  ngOnInit(): void {
    /**
     * @description call get all user
    */
    this.getAllUsers()
  }

  /**
   * @description get all Users
   */
  getAllUsers() {
    const Users$ =  this._UsersService.getAllUsers().subscribe( ({data}: any) => {
      this.users = data
    })

    /**
     * @description Push Users$ Observable in subscriptions array
     */
    this.subscriptions.push(Users$);
  }

  /**
   * 
   * @param event 
   */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }

  ngOnDestroy(){
    /**
     * @description Unsubscribe from RxJS Observables 
     */
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

}
