import React from 'react';
import { History } from 'history';
import { Link } from 'react-router-dom';

interface LeftSidebarProps {
  history: History;
}

const LeftSidebar: React.FC<LeftSidebarProps> = (props) => {
  return (
    <div className="sidebar-content">
      <Link to="/">
        <div className="sidebar-content-item">HOME</div>
      </Link>
      <Link to="/catalog">
        <div className="sidebar-content-item">CATALOG</div>
      </Link>
      <Link to="/cart">
        <div className="sidebar-content-item">CART</div>
      </Link>
      <Link to="/about">
        <div className="sidebar-content-item">ABOUT</div>
      </Link>

    </div>
  );
}

export default LeftSidebar;