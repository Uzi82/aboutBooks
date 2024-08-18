import 'libs/styles/bin/PopUp.scss';
import { ReactNode, useState } from 'react';



interface IUsePopUp {
    PopUp: ({children}:{children:ReactNode}) => false | JSX.Element;
    getHidePopUp: () => void;
    getShowPopUp: () => void;
}

export default function usePopUp(condition:boolean): IUsePopUp {
    const [isShowed, setTogglePopUp] = useState(condition);

    function getShowPopUp() {
        setTogglePopUp(true);
    }
    function getHidePopUp() {
        setTogglePopUp(false);
    }

    return {
        getHidePopUp,getShowPopUp,
        PopUp: ({children}) => (
             isShowed && 
             <div className="PopUp">
                {children}
            </div>
        )
    };
}


