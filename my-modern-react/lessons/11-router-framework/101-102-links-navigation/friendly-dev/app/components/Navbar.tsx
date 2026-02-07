//NavLink is used for navigation links that can apply an "active" class when the link matches the current URL.
import { NavLink } from 'react-router';
import { FaLaptopCode } from 'react-icons/fa'; // Importing a laptop code icon from react-icons

const Navbar = () => {
  const base = 'transition hover:text-blue-400';
  const active = 'text-blue-400 font-semibold';
  return (
    <nav className='bg-gray-800 border-b border-gray-700 shadow-sm sticky top-0 z-50'>
        <div className='space-x-4 text-sm text-gray-300'>
            <NavLink to='/' className={({ isActive }) => (isActive ? active : base)}>
                Home
            </NavLink>
            <NavLink
                to='/projects'
                className={({ isActive }) => (isActive ? active : base)}
            >
                Projects
            </NavLink>
            <NavLink to='/blog' className={({ isActive }) => (isActive ? active : base)}>
                Blog
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? active : base)}>
                About
            </NavLink>
            <NavLink
                to='/contact'
                className={({ isActive }) => (isActive ? active : base)}
            >
                Contact
            </NavLink>
        </div>
    </nav>
  );
};

export default Navbar;