import React from "react";
import "./Sidebar.css";
import {
  Logo,
  OverviewIcon,
  TransactionsIcon,
  CardsIcon,
  InvoicesIcon,
  GoalsIcon,
  SettingsIcon,
} from "../../assets";
import { navMenuItems } from "./SidebarConstants";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="sidebar-container">
      <div className="logo">
        <img src={Logo} />
        <span>cloudcash</span>
      </div>
      <div className="nav-menu">
        <ul>
     {
      navMenuItems.map((navMenu,index)=>{
return <li></li>
      })
     }
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
