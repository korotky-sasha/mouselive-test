import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class AddEventService {
  apiUrl = 'api/events';
  constructor(private http: HttpClient) {}

  addEvent(event: IEvent): Observable<any> {
    return this.http.post(this.apiUrl, event);
  }
}
