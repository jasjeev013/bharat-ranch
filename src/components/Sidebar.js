import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : ''} d-flex justify-content-between`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <div className="sidebar-content text-center">
          <h2>Menu</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
