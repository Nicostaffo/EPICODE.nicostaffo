import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Service/todos/todos.component';
import { TodoComponent } from './Models/todo/todo.component';
import { CompletedComponent } from './Pages/completed/completed.component';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    CompletedComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
