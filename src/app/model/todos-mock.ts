import { TodoClass, TodoPriority } from "./todo-class";
import { TodoInterface } from "./todo-interface";

export const TODOS: TodoClass[] = [];

const todo1 = new TodoClass('mandare curriculum ad andrea');
const todo2 = new TodoClass('corrompere andrea per l\'esame finale');
const todo3 = new TodoClass('maledire angular');
const todo4 = new TodoClass('riguardare classi js', [], new Date(), TodoPriority.HIGH)
const todo5 = new TodoClass('test', [], new Date(), TodoPriority.DONE)
TODOS.push(todo1);
TODOS.push(todo2);
TODOS.push(todo3);
TODOS.push(todo4);
TODOS.push(todo5)

export const TODOS_I:TodoInterface[] = [
  {
    "creationDate": 1653288733,
    "name": "Inviare curriculm più bello",
    "tags": [
      "lavoro"
    ],
    "priority": 0,
    "id": "3"
  },
  {
    "creationDate": 1653560286.702,
    "name": "pagare la bolletta",
    "tags": [
      "famiglia"
    ],
    "priority": 2,
    "id": "4"
  },
  {
    "creationDate": 1653628329.369,
    "name": "aggiungere funzionalità all'app",
    "tags": [
      "lavoro"
    ],
    "priority": 1,
    "id": "5"
  },
  {
    "creationDate": 1653635600.344,
    "name": "comprare il latte",
    "tags": [
      "casa",
      "spesa"
    ],
    "priority": 0,
    "id": "6"
  },
  {
    "creationDate": 1653635600.344,
    "name": "studiare html",
    "tags": [
      "varie",
      "spesa"
    ],
    "priority": -1,
    "id": "7"
  }
]


// const todo: TodoInterface = {id: '01', name: 'mangia la frutta', creationDate:303879318134, tags:['dieta'], priority:2};



// const todoI1 = {
//   id: '01',
//   name: 'mangia la frutta',
//   creationDate: 303879318134,
//   tags: ['dieta'],
//   priority: 2,
//   doneDate: 3984349987,
//   extra: ['mi raccomando le arance'],
//   creator: 'Andrea Asioli'
// }


// const todoI2 = {
//   id: '01',
//   name: 'mangia la frutta',
//   creationDate: 303879318134,
//   tags: ['dieta'],
//   priority: 2,
//   doneDate: 3984349987,
//   prize: 'pizza',
//   subTodo: ['compra la frutta']
// }


// const todoI3:TodoInterface = todoI1;

// const todoI4:TodoInterface = todoI2;
