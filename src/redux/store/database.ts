export class Database {
    userTable: IUser[];
    taskTable: ITask[];
    HOST: string;
    PASSWORD: string;

    constructor() {}

    async connect() {
        const mongoose = {
            connect: (a: string, b: Object) => { }
        }
        try {
            await mongoose.connect(
                `mongodb+srv://ErickChavez:ChavezPass@cluster0.qb8ir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                    useCreateIndex: true
                }
            );
        } catch (err) {
            console.log('Connect Error', { err });
        }
    }

    /* USER TABLE */
    addUser(user: IUser) {
        const exists = this.userTable.findIndex((user: IUser) => user.id === User.id);
        if (!exists) {
            this.userTable.push(user);
            return {
                message: 'Bienvenido.',
                type: TYPE_STATUS.SUCCESS,
            }
        } else {
            return {
                message: 'El usuario ya existe.',
                type: TYPE_STATUS.FAILED,
            }
        }
    }

    getUser(idUser: string) {
        return this.userTable.find((user: IUser) => user.id === idUser)
    }

    deleteUser(idUser: string) {
        this.userTable = this.userTable.filter((user: IUser) => user.id !== idUser)
    }

    loginUser(User: IUser) {
        const exists = this.userTable.findIndex((user: IUser) => user.id === User.id);
        if (exists) {
            let correctPassword: boolean = false;
            const user = this.userTable[exists]
        }
    }


    /* TASK TABLE */

    addTask(task: ITask) {
        this.taskTable.push(task);
    }

    getTask(idTask: string) {
        return this.taskTable.find((task: ITask) => task.id === idTask)
    }

    deleteTask(idTask: string) {
        this.taskTable = this.taskTable.filter((task: ITask) => task.id !== idTask)
    }

    getTasks(idUser: string) {
        return this.taskTable.filter((task: ITask) => task.idUser == idUser);
    }
}

interface IUser {
    id: string;
    username: string;
    password: string;
    createdAt?: Date;
}

interface ITask {
    idUser: string;
    id: string;
    title: string;
    description: string;
    deadline: string;
    URLImage: string;
    type: string;
    createdAt: Date;
}

const TYPE_STATUS = {
    SUCCESS: 'SUCCESS',
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    FAILED: 'FAILED'
}





