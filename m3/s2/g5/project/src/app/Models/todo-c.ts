import { TodoI } from "../Interfaces/todo-i";
export class TodoC implements TodoI {
    id: number;
    title: string;
    completed: boolean;
    constructor(id: number, title: string, completed: boolean) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

}
