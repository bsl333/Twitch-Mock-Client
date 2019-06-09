import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link href="/streams/show" className="item">
          All Streams
        </Link>
        <Link href="/" className="item">
            Logout
        </Link>
      </div>
    </div>
  );
}

export default Header;