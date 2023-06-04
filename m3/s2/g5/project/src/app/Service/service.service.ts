import { Injectable } from '@angular/core';
import { TodoC } from '../Models/todo-c';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  myFetch = 'http://localhost:3000/todos'

  myArr: TodoC[] = []

  constructor() { }

  getToDos(): Promise<TodoC[]> {
    return fetch(this.myFetch).then(response => response.json());
  }

  addToDo(todo: TodoC): Promise<TodoC> {
    return fetch(this.myFetch, {
      method: 'post',//gli ndico che voglio creare
      headers: { 'Content-Type': 'application/json' },//specifico il formato(per la compatibilità)
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }
  removeToDo(id: number = 0) {
    return fetch(this.myFetch + '/' + id, {
      method: 'DELETE',//indico che voglio eliminare
    }).then(response => response.json());
  }
  changeStatus(id: number) {
    const thisUrl = `${this.myFetch}/${id}`;
    const data = { completed: true };
    return fetch(thisUrl, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json);
  }
}
