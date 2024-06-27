import React, { useState } from "react";
import "./Sidebar.css";
import { Logo, UpgradeIcon } from "../../assets";
import { navMenuItems } from "./SidebarConstants";
import { Link, useLocation } from "react-router-dom";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ open, setOpen }: Props) => {
  const location = useLocation();
  const getClassName = (href: string) => {
    return location.pathname === href ? "active" : "";
  };

  return (
    <>
      <div className={`sidebar ${open ? "opened" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(!open)}>
          X
        </button>

        <div className="sidebar-logo">
          <img src={Logo} alt="Logo" />
          <span>cloudcash</span>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {navMenuItems.map((item, index) => {
              return (
                <li key={item.title} className={getClassName(item.href)}>
                  <object
                    type="image/svg+xml"
                    data={item.logo}
                    width={"17px"}
                  ></object>
                  <Link to={item.href} onClick={() => setOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="upgrade">
            <img src={UpgradeIcon} alt="Icon" />
            <p>
              Give your money <br /> awesome space in cloud
            </p>
            <button>Upgrade to premium</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
