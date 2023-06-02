import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedComponent } from './Pages/completed/completed.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './Pages/todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletedComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
