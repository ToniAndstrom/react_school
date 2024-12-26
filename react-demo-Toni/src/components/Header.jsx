import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <h1>Toni Andström</h1>
        
           <nav>
            <ul>
                <li>
                    <Link to ="/">Landing page</Link>
                </li>
                <li>
                <Link to = "/persons">Persons</Link>
                </li>
                <li>
                <Link to ="/about">About</Link>
                </li>
            </ul>
           </nav>
           </header>

    );
};
export default Header;