import {getUniqueID} from 'react-native-markdown-renderer';

class UserModel {
    
    id: string;
    username: string;
    password: string;
    createdAt: Date;

    constructor(
        username?:string, 
        password?:string, 
    ){
        this.username = username || '';
        this.password = password || '';

        this.id = getUniqueID();
        this.createdAt = new Date();
    }

    createUserModelFromObject(
        user: {
            id?: string,
            username?: string,
            password?: string,
            createdAt?: Date
        }
    ){
        this.id = this.id || getUniqueID();
        this.username = user.username || '';
        this.password = user.password || '';
        this.createdAt = this.createdAt || new Date();
    
    }

    setValue(user:UserModel){
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.createdAt = user.createdAt;
    }

}

export default UserModel;