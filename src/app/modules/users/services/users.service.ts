import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _HttpClient: HttpClient
  ) { }

  /**
   * @description Get All Users
   * @memberof UsersService
   * @returns {Observable<user[]}
   */
  getAllUsers() {
    const ENDPOINT = `users?page=2`;
    return this._HttpClient.get(`${environment.apiUrl}/${ENDPOINT}`)
  } 

}


