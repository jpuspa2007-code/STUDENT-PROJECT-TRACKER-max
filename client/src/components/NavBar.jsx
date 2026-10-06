import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/task">Task</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;