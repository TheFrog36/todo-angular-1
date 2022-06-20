import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterViewInit, OnDestroy {

  // @Input() todos: TodoClass[];

  todosArray: TodoClass[] = [];

  // @Input() set todos(value: TodoClass[]){
  //   this.todosArray = value
  //   this.orderByPriority
  // }

  constructor(private dataServ: DataService) {
    this.todosArray = dataServ.getActiveTodos()
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  orderByName(){
    this.todosArray.sort(TodoClass.compareTodoByName)
  }

  orderByDate(){
    this.todosArray.sort(TodoClass.compareTodoByDate)
  }

  orderByPriority(){
    this.todosArray.sort(TodoClass.compareTodoByPriority)
  }

  manageTodoEmission(todo: TodoClass){
    this.refreshArray()
    this.orderByPriority()
  }

  refreshArray(){
    this.todosArray = this.dataServ.getActiveTodos()
  }
}
