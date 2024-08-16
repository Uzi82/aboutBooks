import 'libs/styles/bin/Sign.scss';
import { PropsWithChildren } from 'react';

import Input, {formValidation} from 'libs/UI/Input';
import useForm, { TypeStateForms } from 'libs/utils/useForm';

import AuthService ,{ ISignIn, ISignUp } from 'api/api.auth';

export default function Sign ({children}: PropsWithChildren) { 
    return ( 
        <div className="Sign">
            {children}
        </div>
    );
}



export function SignUp () {
    const {register, handleSubmit} = useForm<ISignUp>();

    
    async function onSubmit(data: TypeStateForms<ISignUp>, e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <Sign>
            <form onSubmit={handleSubmit(onSubmit)} className={`Sign_form`}>
                <Input register = {register('username', {
                    pattern: formValidation.username.pattern, 
                    msgError: formValidation.username.msgError})}  type="text" placeholder="UserName"/>
                    
                <Input register = {register('email', {
                    pattern: formValidation.email.pattern, 
                    msgError: formValidation.email.msgError})}  type="email" placeholder="Email"/>

                <Input register = {register('password', {
                    pattern: formValidation.password.pattern, 
                    msgError: formValidation.password.msgError})}  type="password" placeholder="Password"/>

                <Input register = {register('aprovedPassword', {
                    pattern: formValidation.password.pattern, 
                    msgError: formValidation.password.msgError})} type="password" placeholder="Password"/>

                <button>SignUp</button>
            </form>
        </Sign>
    )
}


export function SignIn () {
    const {register, handleSubmit} = useForm<ISignIn>();

    async function onSubmit(data: TypeStateForms<ISignUp>, e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const auth = new AuthService();

        const resopnse = auth.signIn({
            username: data.username!.value,
            password: data.password!.value,
        })
        .then((data) => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <Sign>
            <form onSubmit={handleSubmit(onSubmit)} className={`Sign_form`}>
                <Input register = {register('username', {
                    pattern: formValidation.username.pattern, 
                    msgError: formValidation.username.msgError})}  type="text" placeholder="Username"/>

                <Input register = {register('password', {
                    pattern: formValidation.password.pattern, 
                    msgError: formValidation.password.msgError})}  type="password" placeholder="Password"/>
                <button>SignIn</button>
            </form>
        </Sign>
    )
}

