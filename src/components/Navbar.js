import logo from "../assets/icons/artiz.png";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import github from "../assets/icons/github.png";
import fromspacerec from "../assets/icons/fromspacerec.png";
import instagram from "../assets/icons/instagram.png";
const Navbar = () => {
    return(
<div className="flex justify-between item-center"> 
    <img src={fromspacerec} alt="fromspacerec" width={100} className="	cursor-help" />
    <ul className="hidden md:flex">
        <li className="px-2">
            <a href="https://m.facebook.com/Fromspacerecord" target = "_blank" className="cursor-zoom-in" >
                <img src={facebook} alt="facebook" width={40} />{"  "}
            </a>
        </li>
        <li className="px-2">
            <a href="https://twitter.com/fromspacerec" target = "_blank" className="cursor-zoom-in">
                <img src={twitter} alt="twitter" width={40} />{"  "}
            </a>
        </li>
        <li className="px-2">
            <a href="https://github.com/topics/fromspace" target = "_blank" className="cursor-zoom-in">
                <img src={github} alt="github" width={40} />{"  "}
            </a>
        </li>
        <li className="px-2">
            <a href="https://www.instagram.com/nasa/?hl=en" target = "_blank" className="cursor-zoom-in">
                <img src={instagram} alt="instagram" width={40} />{"  "}
            </a>
        </li>
    </ul>
</div>
    )
}
export default Navbar;