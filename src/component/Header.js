import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for routing
import '../Header.css';

const Header = ({ loggedIn, isAdmin, onLogout }) => {
  return (
    <div className="header">
      <span className="left">
        <Link to="/">Home</Link>
      </span>
      <div className="right">
        {loggedIn ? (
          <>
            <input type="text" placeholder="Search" />
            <button onClick={onLogout}>Logout</button>
            {isAdmin && <Link to="/add-products">Add Products</Link>}
          </>
        ) : (
          <>
            <button className="signin btn">Login</button>
            <button className="signup btn">Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

