import { taskInterface } from './taskInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskserviceService {

  private url: string = "https://jsonplaceholder.typicode.com/todos";

  getData(): Observable<taskInterface[]> {
    return this.http.get<taskInterface[]>(this.url);
  }

  deleteData(id){
    return this.http.delete(this.url, id)
  }

  constructor(private http: HttpClient) { }
}
