import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';

const Navbar = () => {
  return (
    <Wrapper>
      <nav className='nav-center'>
        <span className='logo'>SipCraft</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            Newsletter
          </NavLink>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
