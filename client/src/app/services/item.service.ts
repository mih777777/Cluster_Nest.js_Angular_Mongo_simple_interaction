import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Items } from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Items[]> {
    return this.http.get<Items[]>('http://localhost:3000/items')
  }

}
