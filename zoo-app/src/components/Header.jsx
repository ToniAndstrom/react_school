import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
        <header>
          <div className='logo'>
          <NavLink to="/">
            <h1 className="logo">ZOO</h1>
            </NavLink>
           </div>
           <nav>
            <ul>
              <li><NavLink to= "/">Home</NavLink></li>
              <li><NavLink to= "/animals">Animals</NavLink></li>
              <li><NavLink to = "/birds">Birds</NavLink></li>
              <li><NavLink to = "/insects">Insects</NavLink></li>
              <li><NavLink to = "/fishes">Fishes</NavLink></li>
              <li><NavLink to = "/about">About</NavLink></li>
            </ul>
                </nav>

        </header>
        
  );
};

export default Header;