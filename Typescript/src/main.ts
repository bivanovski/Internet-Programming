import {add} from "./calculator"
import {User} from "./models/user"

const user1: User = {
    id: 1,
    name: 'Bojan',
    age: 20
}

const user2: User = {
    id: 2,
    name: 'Ana',
    age: 25
}

console.log(add(user1.age, user2.age))





