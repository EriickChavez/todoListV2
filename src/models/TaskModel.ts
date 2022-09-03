import {getUniqueID} from 'react-native-markdown-renderer';

export default class TaskModel {
    id: string;
    title: string;
    description: string;
    deadline: string;
    URLImage: string;
    type: string;
    createdAt: Date;

    constructor( 
        title: string, 
        description: string, 
        deadline?: string, 
        URLImage?: string,
        type?: string,
        id?: string,
    ){
        this.id = getUniqueID();
        this.title = title || '';
        this.description = description || '';
        this.deadline = deadline || '';
        this.URLImage = URLImage || '';
        this.type = type || '';
        this.createdAt = new Date();
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

    Image(){
        return this.type;
    }

}

