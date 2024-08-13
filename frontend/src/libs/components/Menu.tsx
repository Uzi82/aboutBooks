import 'libs/styles/components/Menu.scss';
import { FaTags, FaListUl, FaCircleQuestion,FaTelegram , FaMessage, FaHeart, FaGithub, FaDiscord } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import { Link } from 'react-router-dom';


export default function Main() {
    return (
        <div className="Menu">
            <div className="Menu_navigate">
                <ul className="wrapper">
                    <li title="Questions" className="Menu_navigate_item"><FaListUl/></li>
                    <li title="Tags" className="Menu_navigate_item"><FaTags/></li>
                    <li title="Ranking" className="Menu_navigate_item"><PiMedalFill/></li>
                </ul>
                <ul className="wrapper">
                    <li title="Your questions" className="Menu_navigate_item"><FaCircleQuestion/></li>
                    <li title="Your answers" className="Menu_navigate_item"><FaMessage/></li>
                    <li title="Your likes & votes" className="Menu_navigate_item"><FaHeart/></li>
                </ul>
            </div>

            <div className="Menu_networks">
                <Link to=""><FaGithub className='Menu_networks_icons'/></Link>
                <Link to=""><FaDiscord className='Menu_networks_icons'/></Link>
                <Link to=""><FaTelegram className='Menu_networks_icons'/></Link>
            </div>
        </div>
    )
}