import React from "react";

export const Navbar = ({ setActivePage, isQS }) => {;
  return (
    <div className="navbar">
      <span>Business Monitoring</span>
      <div className="navbar-icons">
        {isQS && (
          <div
            className="asset-icon"
            onClick={() => {
              setActivePage("list");
            }}
          >
            <img src="./left-arrow.svg" alt="Left arrow" /> Assets
          </div>
        )}
        <div
          className="asset-icon"
          onClick={() => {
            localStorage.removeItem("auth");
            setActivePage("login");
          }}
        >
          <img src="./logout.svg" alt="Left arrow" /> Logout
        </div>
      </div>
    </div>
  );
};
