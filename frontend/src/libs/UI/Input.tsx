import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

import 'libs/styles/bin/Input.scss';
import { returnRegister } from "libs/utils/useForm";


interface InputProps {
    type: 'text'|'email'|'password',
    placeholder?: string, 
    label?: string,
    pattern?: RegExp
    msgError?: string,
    register: returnRegister
} 

export default function Input (Props: InputProps) {
    const [input, setInput] = useState<string>('');
    const [error, setError] = useState<string|null>(null);
    const isShowedIcons = input.length > 0 ? "active" : "" ;

    const pattern = Props.register.options?.pattern;
    
    
    function handleChange({target}:React.ChangeEvent<HTMLInputElement> ){
        
        if(pattern) {
            if (pattern.test(target.value)) {
                setError(Props.register.options?.msgError??'is invalid')
                Props.register.changeData((state) => {
                    state.isError = true;
                })
            }
            else setError(null)
            
          
            setInput(target.value);
        }
    };
    
    return (
        <div className="Input">
            <div className="wrapper">
                <input 
                    name="input"
                    type={Props.type} 
                    onChange={handleChange} 
                    placeholder={Props.placeholder}/>
                <label htmlFor="input">{Props.label}</label>
            </div>
            {   
                pattern && (
                error !== null
                ? <FaCheck className={`Input_iconsValidation ${isShowedIcons} __done`}/>
                : <FaRegCircleXmark className={`Input_iconsValidation ${isShowedIcons} __error`}/>
               ) 
            }
        </div>
    )
}


export const formValidation  = {
    username: {
        pattern:/^[A-Za-z0-9]{5,23}$/i, 
        msgError:"Все символы могут быть буквами, цифрами или подчеркиванием и иметь длину 5-23 символов"},
    email: {
        pattern: /^((([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
        msgError:'Данный почтовый адрес не соответствует ожидаемому шаблону. Пожалуйста, проверьте правильность написания вашего почтового адреса и попробуйте еще раз!',
    }, 
    password: {
        pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,30}$/,
        msgError: 'пароль должен содержать одну цифру от 1 до 9, одну строчную букву, одну заглавную букву, один специальный символ, без пробелов и иметь длину 8–16 символов.'
    }
}