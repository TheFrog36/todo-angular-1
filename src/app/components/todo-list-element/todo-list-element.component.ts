import { EmitterVisitorContext } from '@angular/compiler';
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';

@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.scss']
})
export class TodoListElementComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() todo?: TodoClass;
  @Output() onTodoCompleted = new EventEmitter<TodoClass>();

  constructor() {
    // this.onTodoCompleted = new EventEmitter<TodoClass>();
  }

  ngOnInit(): void {
    console.log('oninit', new Date().getTime())  // Stampo l'esatto momento in cui viene creato
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  todoCompleted(): void {
    this.todo?.done()
    this.onTodoCompleted.emit(this.todo)
  }

}
