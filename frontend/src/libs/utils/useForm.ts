import { useRef } from "react";

export type TypeStateForms<T> = Partial<Record<keyof T, IUserForm>>

export interface IOptions  {
    pattern?: RegExp,
    msgError?: string,
    
}

export interface IUserForm extends IOptions {
    isError: boolean,
    value: string,
}

const DefaultUserForm: IUserForm = {
    isError: false,
    value: '',
}


export interface returnRegister {
    options: IOptions | undefined;
    changeData: (cb: (oldState: IUserForm) => void) => void
}

export type FormEvent = React.FormEvent<HTMLFormElement|HTMLButtonElement>;
interface IHandleSubmit<T> {
    SubmitHandler: (data: TypeStateForms<T>, e: FormEvent) => Promise<void>,  
}

export default function useForm<T>()  {
    const stateForms = useRef<TypeStateForms<T>>({});
    
    function setInput(regName:keyof T, options?: IOptions) {
        stateForms.current[regName] = {
            ...options,
            ...DefaultUserForm
        };
    }

    function changeData(regName: keyof T) {
        const state: IUserForm = stateForms.current[regName]!;
        return (cb: (oldState: IUserForm) => void) => cb.call([], state);
    }


    function handleSubmit(submitHandler: IHandleSubmit<T>["SubmitHandler"]) {      
        return (e:FormEvent) => {
            submitHandler.call([], stateForms.current, e);
        } 
    }

    return {
        handleSubmit,
        register: (regName: keyof T, options?: IOptions) =>  {
            setInput(regName, options);
            return  {
                options,
                changeData: changeData(regName)
            };
         } 
    }
}