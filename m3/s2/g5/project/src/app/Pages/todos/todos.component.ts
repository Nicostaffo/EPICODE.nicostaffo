import { Component, OnInit } from '@angular/core';
import { TodoC } from 'src/app/Models/todo-c';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  myArr: TodoC[] = []

  constructor(private todosService: ServiceService) { }
  ngOnInit() {
    this.getToDos();
  }
  removeToDo(id?: number) {
    this.todosService.removeToDo(id).then((res) => {
      this.myArr = res
    })
  }
  getToDos() {
    this.todosService.getToDos().then(res => {
      this.myArr = res
    })
  }
}
