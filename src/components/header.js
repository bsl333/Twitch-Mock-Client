import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/streams/show" className="item">
          All Streams
        </Link>
        {/* <Link to="/" className="item"> */}
        <GoogleAuth />
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Header;