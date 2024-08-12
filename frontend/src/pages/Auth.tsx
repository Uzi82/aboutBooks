import 'libs/styles/modules/Auth.scss';
import Input from 'libs/UI/Input';
import { useParams } from 'react-router';

export default function () { 
    const params = useParams<{modeForm:string}>();
    
    return ( 
        <div className="Auth">
            <div className="wrapper">
                <form action="" className={`Auth_form ${params.modeForm} __up`}>
                    <Input type="name" placeholder="UserName"/>
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                    <Input type="password" placeholder="Password"/>
                    <button>SignUp</button>
                </form>

                <form action="" className={`Auth_form ${params.modeForm} __in`}>
                    <Input type="name" placeholder="UserName"/>
                    <Input type="password" placeholder="Password"/>
                    <button>SignIn</button>
                </form>
            </div>
        </div>
    );
}
