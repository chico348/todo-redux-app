import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case filtrosValidos.completados:
        return todos.filter(todo => todo.completado);
      case filtrosValidos.pendientes:
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
