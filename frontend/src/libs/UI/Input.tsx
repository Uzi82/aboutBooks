import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

import 'libs/styles/UI/Input.scss';

interface InputProps {
    type: string,
    placeholder: string, 
} 

const patternes = {
    isName: (text: string) => /^[A-Za-z0-9_]{5,29}$/.test(text),
    isEmail: (text: string) => /\S+@\S+\.\S+/.test(text), 
    isPassword: (text:string) => /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,30}$/.test(text)
}

export default function Input (Props: InputProps) {
    const [input, setInput] = useState<string>('');
    const [error, setError] = useState<string|null>(null);
    const isShowedIcons = input.length > 0 ? "active" : "" ;
  

    function handleChange({target}:React.ChangeEvent<HTMLInputElement> ){
        let isValid:boolean = false;

        switch (Props.type) {
            case 'name': isValid = patternes.isName(target.value); break;
            case 'email': isValid = patternes.isEmail(target.value); break;
            case 'password': isValid = patternes.isPassword(target.value); break; 
        }
        
        !isValid 
        ? setError('is invalid')
        : setError(null)

        setInput(target.value);
    };
    
    
    return (
        <div className="Input">
            <div className="wrapper">
                <input 
                    id="input" 
                    type={Props.type} 
                    onChange={handleChange} 
                    placeholder={Props.placeholder}/>
                <label htmlFor="input">{Props.placeholder}</label>
            </div>
            {   
                !error 
                ? <FaCheck className={`Input_iconsValidation ${isShowedIcons} __done`}/>
                : <FaRegCircleXmark className={`Input_iconsValidation ${isShowedIcons} __error`}/>
            }
        </div>
    )
}
