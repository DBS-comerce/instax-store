import React from 'react';
import { History } from 'history';
import { Link } from 'react-router-dom';

interface LeftSidebarProps {
  history: History;
}

const LeftSidebar: React.FC<LeftSidebarProps> = (props) => {
  const {history} = props;
  return (
    <div className="sidebar-content">
      <Link to="/">
        <div className="sidebar-content-item">HOME</div>
      </Link>
      <div className="sidebar-content-item">CATALOG</div>
      <div className="sidebar-content-item">CART</div>
      <Link to="/about">
        <div className="sidebar-content-item">ABOUT</div>
      </Link>

    </div>
  );
}

export default LeftSidebar;