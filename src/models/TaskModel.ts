import {getUniqueID} from 'react-native-markdown-renderer';

export default class TaskModel {
    idUser: string;
    id: string;
    title: string;
    description: string;
    deadline: string;
    URLImage: string;
    type: string;
    createdAt: Date;

    constructor();

    constructor( 
        title?: string, 
        description?: string, 
        deadline?: string, 
        URLImage?: string,
        type?: string,
        id?: string,
        idUser?: string,
    ){
        this.idUser = idUser || '';
        this.id = getUniqueID();
        this.title = title || '';
        this.description = description || '';
        this.deadline = deadline || '';
        this.URLImage = URLImage || '';
        this.type = type || '';
        this.createdAt = new Date();
    }


    setValues(task:TaskModel){
        this.id = task.id|| getUniqueID();
        this.title = task.title || '';
        this.description = task.description || '';
        this.deadline = task.deadline || '';
        this.URLImage = task.URLImage || '';
        this.type = task.type || '';
        this.createdAt = task.createdAt || new Date();
        this.idUser = task.idUser || '';
    }

    Title(){
        return this.title;
    }

    Description(){
        return this.description;
    }

    Deadline(){
        return this.deadline;
    }

    Image(){
        return this.URLImage;
    }

    Type(){
        return this.type;
    }

}

