import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TodoClass } from '../model/todo-class';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  fetchData(){
    return fetch('https://62860d1bf0e8f0bb7c0f4284.mockapi.io/todos')
  }

  getTodosFromDb(){
    const  url = 'https://62860d1bf0e8f0bb7c0f4284.mockapi.io/todos'
    return this.http.get<TodoClass[]>(url).pipe(
      map(dbObjects => this.convertToTodoClass(dbObjects))
    )
  }

  convertToTodoClass(dbObjectArray: any){
    const todoArray = []
    for (const dbObject of dbObjectArray) {
      const newTodo = TodoClass.fromTodoObj(dbObject)
      todoArray.push(newTodo)
    }
    return todoArray
  }
}
