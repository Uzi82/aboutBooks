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

 
interface IHandleSubmit<T> {
    SubmitHandler: (data: TypeStateForms<T>, e: React.FormEvent<HTMLFormElement>) => Promise<void>,  
}

export default function useForm<T>()  {
    const stateForms:TypeStateForms<T> = {};
    
    function setInput(regName:keyof T, options?: IOptions) {
        stateForms[regName] = {
            ...options,
            ...DefaultUserForm
        };
    }

    function changeData(regName: keyof T) {
        const state: IUserForm = stateForms[regName]!;
        return (cb: (oldState: IUserForm) => void) => cb.call([], state);
    }


    function handleSubmit(submitHandler: IHandleSubmit<T>["SubmitHandler"]) {      
        // Here should be other code, that handle axios request from data a input elements, so ...
        return (e:React.FormEvent<HTMLFormElement>) => {
            submitHandler.call([], stateForms, e);
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