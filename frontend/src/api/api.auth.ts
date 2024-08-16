import {instance} from './api.config';
import {AxiosResponse} from 'axios';


export default class AuthService implements IAuthService{
    signIn ({username, password}:ISignIn) {
        return instance.post('/api/auth/login', {username, password});
    }

    signUp({username,email,password, aprovedPassword}:ISignUp) {
        if(password !== aprovedPassword) {
            return 'password is incorrect';
        } 
        
        return  instance.post('/api/auth/login', {
            username,email,password
        });
    }

    refreshToken () {
        return instance.get('/api/auth/refreshToken');
    }

    logout () {
        return instance.post('/api/auth/logout');
    }
}


interface IAuthService {
    signIn: (data:ISignIn) => Promise<AxiosResponse<any, any>>,
    signUp: (data:ISignUp) => Promise<AxiosResponse<any, any>> | string,
    refreshToken: () =>  Promise<AxiosResponse<any, any>>;
    logout: () =>  Promise<AxiosResponse<any, any>>;
}

export interface ISignIn {
    username: string, 
    password: string,
}

export interface ISignUp {
    username: string,
    email: string,
    password: string,
    aprovedPassword:string 
}