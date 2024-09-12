import { Component, OnInit } from '@angular/core';
import { toggle, toggleAll } from '../todo.actions';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(toggleAll({completado: this.completado}));
  }

}
