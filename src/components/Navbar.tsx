
import { Link } from 'react-router-dom';
import React from 'react';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 p-6">
      <div className="container mx-auto">
        <div className="absolute left-4 top-0 flex items-center ">
          <div className="text-white text-5xl  ">
            Silent<span className="text-red-600 ">Hill</span>
          </div>
          <ul className="ml-6 flex space-x-7 text-xl">
            <NavItem to="/">Home</NavItem>
            <Link to="/silent_game">Silent Game</Link>
            <NavItem to="/contact">Contact</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-white hover:text-red-600 transition duration-300"
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;