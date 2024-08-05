import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Subject, catchError, map } from 'rxjs';
import { MenuChangeEvent } from '../api/menuchangeevent';
import { IUserRole } from '../interfaces/user-roles';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuSource = new Subject<MenuChangeEvent>();
  private resetSource = new Subject();

  constructor(private http: HttpClient) { }

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

  onMenuStateChange(event: MenuChangeEvent) {
      this.menuSource.next(event);
  }

  reset() {
      this.resetSource.next(true);
  }



 
}


