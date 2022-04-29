import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';
import { IconContext } from "react-icons"

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/books',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navBar">
      <ul className="navList">
        <h1 className='azure'>Bookstore FSH</h1>
        {links.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink to={path}
             style={({ isActive }) =>
             isActive
               ? { color: '#000' }
               : { color: '#545e6f' }
           }>{text}</NavLink>
          </li>
        ))}
      </ul>
      <IconContext.Provider value={{ color: '#0290ff', size: '1em' }}>
        <div className="userIcon">
          <GoPerson />
        </div>
      </IconContext.Provider>
    </nav>
  );
};
export default Navbar;
