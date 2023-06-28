//React...
import {useContext} from "react"
import {Link} from "react-router-dom"

//Components...
import { MyContext } from '../../App';

//React icons...
import {RiStackLine} from "react-icons/ri"
import {FaHistory} from "react-icons/fa"
import {FiShoppingCart} from "react-icons/fi"
import {ImStatsBars} from "react-icons/im"

//Images...
import ProfilePic from "../../assets/profilePic.svg"

//Styles...
import "./SideNav.scss"


const SideNav = () => {

    const {setShowMobileM} = useContext(MyContext)

    return (
        <nav className='side-nav-bar'>
            <div className='profile'>
                <img src={ProfilePic} />
            </div>
            <div className='nav-btns'>
                <Link to="/"><RiStackLine/></Link>
                <Link to="/history"><FaHistory/></Link>
                <Link to="/statistics"><ImStatsBars/></Link>
            </div>
            <div className='cart'>
                <span onClick={() => setShowMobileM(prev => !prev)}>
                    <FiShoppingCart/>
                </span>
            </div>
        </nav>
    );
};

export default SideNav;