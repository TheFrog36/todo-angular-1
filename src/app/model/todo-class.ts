export class TodoClass {

  name: string;
  tags: string[];
  priority: TodoPriority;
  private readonly _creationDate: number;
  private _doneDate?: number;


  constructor(name: string, tags: string[] = [], creationDate: Date = new Date(), priority: TodoPriority = TodoPriority.LOW){
    this.name = name;
    this.tags = tags;
    this._creationDate = creationDate.getTime();
    this.priority = priority;
  }

  get creationDate(): Date{
    return new Date(this._creationDate);
  }

  get color(): string{
    return getPriorityColor(this.priority);
  }

  get description(): string{
    return getPriorityString(this.priority);
  }

  static compareTodoByName(a:TodoClass, b:TodoClass){
    return a.name.localeCompare(b.name)
  }

  static compareTodoByDate(a:TodoClass, b:TodoClass){
    return  a._creationDate - b._creationDate
  }

  static compareTodoByPriority(a:TodoClass, b:TodoClass){
   return b.priority - a.priority
  }

  done(): void {
    const now = new Date()
    this._doneDate = now.getTime()
    this.priority  = TodoPriority.DONE
  }

  get doneDate(): Date | null{
    return this._doneDate? new Date(this._doneDate) : null
  }

  static fromTodoObj (dbObject: any){
    const Todo = new TodoClass(dbObject.name, dbObject.tags, new Date(dbObject.creationDate * 1000), dbObject.priority)
    if(dbObject.doneDate) Todo._doneDate = dbObject.doneDate
    return Todo
  }

}

export enum TodoPriority {
  DONE =  -1,
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2,
  VERYHIGH = 3
}

export function getPriorityColor(priority: TodoPriority): string{
  switch (priority) {
    case TodoPriority.DONE:
      return 'gray';
    case TodoPriority.LOW:
      return 'green'
    case TodoPriority.MEDIUM:
      return 'yellow'
    case TodoPriority.HIGH:
      return 'orange'
    default:
      return 'red'
  }
}

export function getPriorityString(priority: TodoPriority): string {
  switch (priority) {
    case TodoPriority.DONE:
      return 'completato';
    case TodoPriority.LOW:
      return 'bassa'
    case TodoPriority.MEDIUM:
      return 'media'
    case TodoPriority.HIGH:
      return 'alta'
    default:
      return 'molto alta'
  }
}

