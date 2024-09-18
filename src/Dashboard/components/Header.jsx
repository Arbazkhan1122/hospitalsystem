import React from "react";
import { GoBell } from "react-icons/go";
import "./Header.css";

const Header = () => {
  return (
    <div className="hrmsDashSidebarHeader">
      <div>{/* Add content if needed */}</div>
      <div className="hrmsDashHeaderRight">
        <div className="hrmsDashHeaderRight">
          <button className="hrmsDashNotificationButton">
            <GoBell size={28} />
            <span className="hrmsDashNotificationBadge">9</span>
          </button>
          <img
            className="hrmsDashProfileImage"
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
