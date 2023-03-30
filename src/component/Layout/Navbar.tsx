import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface NavbarProps {}

interface NavbarState {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className='navbar'>
      <div>
        <Link to="/" >
          <h1 className='nh1'> User Management</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
