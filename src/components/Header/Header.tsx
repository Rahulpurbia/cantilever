// src/components/Header.js
import React from "react";
import "./Header.css";
import { MenuIcon } from "../../assets";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setOpen }: Props) => {
  return (
    <div className="header">
   <div className="mobile-header">
   <button onClick={() => setOpen(true)} className="menu-btn">
        <img src={MenuIcon} />
      </button>
   </div>
      <h1>Weekly sumup</h1>
      <p>Get summary of your weekly online transactions here.</p>
    </div>
  );
};

export default Header;
