import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { addTodoAction, toggleTodoAction,removeTodoAction } from 'src/app/store/actions/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  newTodoTitle!: string;

  todosList!: Todo[];

  constructor(private store:Store<{todos:{todos:Todo[]}}>) {

      store.select('todos').subscribe( (todosState:{todos:Todo[]})=>{

        this.todosList = todosState.todos;

        console.log(this.todosList);

      })

  }

  addTodo(){

    if(this.newTodoTitle.trim() === '') {


        return;
    
    }

     const todo: Todo = {

      id: Date.now().toString(),
      title: this.newTodoTitle,
      completed: false,
      userId: 101,
     }

     this.store.dispatch(addTodoAction({todo}));
     this.newTodoTitle = '';

  }

  toggleTodo(id:string){

      this.store.dispatch(toggleTodoAction({id}));

  }
  
  removeTodo(id:string){

      this.store.dispatch(removeTodoAction({id}));

  }


}

