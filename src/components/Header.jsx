import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.scss'; 

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="header">
      <div className='menu'>  
        <NavLink 
          to='/projects'  
          className={({ isActive }) => (isActive || isHomePage ? 'nav-link-active' : 'nav-link')}
        >
          Projects
        </NavLink>
        <NavLink 
          to='/contact'  
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
