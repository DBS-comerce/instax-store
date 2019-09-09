import React from 'react';

interface LeftSidebarProps {
  history: any;
}

const redirect = (history:any, path: string) => {
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