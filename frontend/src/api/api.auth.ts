import {instance} from './api.config';
import {AxiosResponse} from 'axios';


export default class AuthService implements IAuthService{
    signIn ({username, password}:IAuth) {
        return instance.post('/api/auth/login', {username, password});
    }

    signUp({username,password}:IAuth) {
        return instance.post('/api/auth/register', {
            username,password
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
    signIn: (data:IAuth) => Promise<AxiosResponse<any, any>>,
    signUp: (data:IAuth) => Promise<AxiosResponse<any, any>> | string,
    refreshToken: () =>  Promise<AxiosResponse<any, any>>;
    logout: () =>  Promise<AxiosResponse<any, any>>;
}

interface IAuth {
    username: string,
    password: string,
} 