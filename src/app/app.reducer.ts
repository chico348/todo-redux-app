import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { filtrosValidos } from "./filtro/filtro.actions";
import { todoReducer } from "./todos/todo.reducer";
import { filtroReducer } from "./filtro/filtro.reducer";

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos
}

export const togs: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
