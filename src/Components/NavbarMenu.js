import React from 'react';
import './NavbarMenu.css';
import demoImage from "../assets/a5.jpg";

function NavbarMenu() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-between px-3">
      <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <form className="d-flex ms-2 ms-md-0 me-md-auto">
          <input className="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search" />
        </form>
        <ul className="navbar-nav ms-auto mb-3">
          <li className="nav-item">
            <button className="btn text-white"><i className="ph ph-envelope"></i></button>
            <span>Messages</span>
          </li>
          <li className="nav-item me-2">
            <button className="btn text-white"><i className="ph ph-gear"></i></button>
            <span>Settings</span>
          </li>
          <li className="nav-item me-2">
            <button className="btn text-white"><i className="ph ph-bell"></i></button>
            <span>Notifications</span>
          </li>
          <li className="nav-item me-2">
            <img src={demoImage} alt="User" className="rounded-circle" style={{ width: '30px', height: '30px' }} />
            <span>Profile</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarMenu;
