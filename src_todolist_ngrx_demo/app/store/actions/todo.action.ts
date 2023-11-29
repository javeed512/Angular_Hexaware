import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';



export const addTodoAction = createAction(
    '[Todos] Add Todo',
    props<{ todo: Todo }>()
)

export const toggleTodoAction = createAction(
    '[Todos] Toggle Todo',
    props<{ id: string }>()
)


export const removeTodoAction = createAction(
    '[Todos] Remove Todo',
    props<{ id: string }>()
)