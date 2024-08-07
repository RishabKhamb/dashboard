import React from 'react';
import './SidebarMenu.css';

function SidebarMenu() {
  return (
    <aside className="bg-dark sidebar d-flex flex-column align-items-center align-items-sm-start px-1 pt-2 text-white">
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li className="nav-item">
          <a href="#home" className="nav-link align-middle px-0">
            <i style={{ color: "#919298" }} className="ph ph-house fs-4"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="#graph" className="nav-link align-middle px-0">
            <i style={{ color: "#919298" }} className="ph ph-chart-bar fs-4"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="#todo" className="nav-link align-middle px-0">
            <i style={{ color: "#919298" }} className="ph ph-calendar-check fs-4"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="#calender" className="nav-link align-middle px-0">
            <i style={{ color: "#919298" }} className="ph ph-wallet fs-4"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="#shop" className="nav-link align-middle px-0">
            <i style={{ color: "#919298" }} className="ph ph-handbag fs-4"></i>
          </a>
        </li>
      </ul>
      <hr />
    </aside>
  );
}

export default SidebarMenu;
