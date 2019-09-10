import React from 'react';
import { History } from 'history'

interface LeftSidebarProps {
  history: History;
}

const redirect = (history: History, path: string) => {
  history.push(path)
}

const LeftSidebar: React.FC<LeftSidebarProps> = (props) => {
  const {history} = props;
  return (
    <div className="sidebar-content">
        <div className="sidebar-content-item"
          onClick={()=> redirect(history, '/')}
        >
          HOME
        </div>
        <div className="sidebar-content-item">CATALOG</div>
        <div className="sidebar-content-item">CART</div>
        <div className="sidebar-content-item"
          onClick={()=> redirect(history, 'about')}
        >
          ABOUT
        </div>
    </div>
  );
}

export default LeftSidebar;