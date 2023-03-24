import React, { useEffect, useState } from "react";

export const Quicksight = ({ setActivePage }) => {
  const [url] = useState(localStorage.getItem("qs"));
  useEffect(() => {
    console.log("Iframe");
    document.getElementById("ifDashboard").setAttribute("src", url);
  }, [url]);
  return (
    <div className="container">
      <div className="navbar">
        <span>BnM</span>
        <div className="navbar-icons">
          <div
            className="asset-icon"
            onClick={() => {
              setActivePage("list");
            }}
          >
            <img src="./left-arrow.svg" alt="Left arrow" /> Assets
          </div>
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
      <iframe title="Dashboard" id="ifDashboard"></iframe>
    </div>
  );
};
