export interface User {
    name: string;
    email: string;
}

const db = [
    {
        name: "Symon",
        email: "symon@diobank.com"
    }
]

export class UserService {
    db: User[]

    constructor(database = db) {
        this.db = database;
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }
        this.db.push(user);
        console.log('DB Atualizado', this.db);
    }

    getAllUsers = () => {
        return this.db;
    }

    deleteUser = (email: string) => {
        this.db = this.db.filter(user => user.email !== email);
    }
}