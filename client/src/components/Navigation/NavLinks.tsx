
import { NavLink } from "react-router-dom";

const NavLinks: React.FC = () => {
        
    return (
        <ul className="flex flex-row gap-[20px] items-center font-sans text-[15px]">
            <li>
                <NavLink to={`/`}>HOME</NavLink>
            </li>
            <li>
                <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
                <NavLink to="/menu">MENU</NavLink>
            </li>
            <li>
                <NavLink to="/contact">CONTACT</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;