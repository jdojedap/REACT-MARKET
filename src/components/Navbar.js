import './Navbar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to={"/teachers"} className="navlink">
                    LISTADO DE USUARIOS
                </NavLink>

            </li>
            <li>
                <NavLink to={"/courses"} className="navlink">
                    NUEVOS USUARIOS
                </NavLink>
            </li>
            
        </ul>

    );

}