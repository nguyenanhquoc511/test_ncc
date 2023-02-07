import React from "react";
import "./style.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-container__ul">
        <li className="sidebar-container__ul__li--active">Home</li>
        <li className="sidebar-container__ul__li">Services</li>
        <li className="sidebar-container__ul__li">News</li>
        <li className="sidebar-container__ul__li">Blog</li>
        <li className="sidebar-container__ul__li">Contact</li>
      </ul>
    </div>
  );
};
