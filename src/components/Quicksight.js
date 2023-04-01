import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Rsvp from "./Rsvp";

export const Quicksight = ({ setActivePage }) => {
  return (
    <div className="container">
      <Navbar setActivePage={setActivePage} isQS={true} />
      {/* <iframe title="Dashboard" id="ifDashboard"></iframe> */}
      <Rsvp />
    </div>
  );
};
