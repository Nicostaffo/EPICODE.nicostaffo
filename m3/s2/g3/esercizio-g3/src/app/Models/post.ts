export class Post {
    id: number
    name: string
    surname: string
    email: string
    active: boolean
    constructor(id: number, name: string, surname: string, email: string, active: boolean) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.active = active;
    }
}
