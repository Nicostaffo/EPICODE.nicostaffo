import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './Pages/completed/completed.component';
import { TodosComponent } from './Pages/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
