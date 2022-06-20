import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

   // @Input() todos: TodoClass[];

   todosArray: TodoClass[] = [];

   // @Input() set todos(value: TodoClass[]){
   //   this.todosArray = value
   //   this.orderByPriority
   // }

    constructor(private dataServ: DataService) {
      this.todosArray = dataServ.getDoneTodos()
    }

    ngOnInit(): void {
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
      this.todosArray = this.dataServ.getDoneTodos()
    }

}
