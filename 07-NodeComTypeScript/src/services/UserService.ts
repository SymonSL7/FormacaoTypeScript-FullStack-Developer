const db = [
    {
        name: "Symon",
        email: "symon@diobank.com"
    }
]

export class UserService {

    createUser = (name: string, email: string) => {
        
        const user = {
            name,
            email
        }

        db.push(user);
        console.log('DB Atulizado', db);
        
    }

    getAllUsers = () => {
        return db
    }

}