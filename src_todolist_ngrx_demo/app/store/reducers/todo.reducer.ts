import { Todo } from "src/app/models/todo.model";
import {createReducer, on} from '@ngrx/store'
import {  addTodoAction,  removeTodoAction, toggleTodoAction } from "../actions/todo.action";

export interface TodoState {

    todos: Todo[];

}

export const initialState: TodoState = {

    todos: [
        {
            id: '1',
            title: 'Todo1',
            completed: false,
            userId: 101
        }


    ]
}



export const TodosReducer = createReducer(

        initialState,
        on(addTodoAction,(state,{todo})=>({

          ...state,
            todos:[...state.todos,todo]
        })),
        on(removeTodoAction,(state,{id})=>({

            ...state,
              todos:state.todos.filter( (todo) => { todo.id != id})
          })),
          on(toggleTodoAction,(state,{id})=>({
            ...state,
            todos: state.todos.map( (todo) => (todo.id === id ? {...todo,completed:!todo.completed}: todo )),
          }))
);