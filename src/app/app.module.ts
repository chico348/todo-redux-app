import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoModule } from "./todos/todo.module";
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { togs } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(togs),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
