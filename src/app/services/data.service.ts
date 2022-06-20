import { Injectable } from '@angular/core';
import { TodoClass } from '../model/todo-class';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  todos: TodoClass[] = []

  constructor(private apiServ: ApiService) {
    // apiServ.fetchData().then(resp => resp.json()).then(result => this.todos = this.convertToTodoClass(result))
    this.apiServ.getTodosFromDb().subscribe({
      next: result => this.todos = result,
      error: err => console.log(err)

    })
  }

  getActiveTodos(){
    return this.todos.filter(e => e.priority !== -1)
  }

  getDoneTodos(){
    return this.todos.filter(e => e.priority === -1)
  }


}
