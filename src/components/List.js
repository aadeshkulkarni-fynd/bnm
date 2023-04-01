import React, { useEffect, useState } from "react";
import { ListOfAssets, showVisualisation } from "../services/asset";
import { Navbar } from "./Navbar";
export const List = ({ setActivePage }) => {
  const [Assets, setAssets] = useState({});
  useEffect(() => {
    async function getAssets() {
      const response = await ListOfAssets();
      setAssets(response);
    }
    getAssets();
  }, []);

  async function goTo(type, assetId) {
    const data = await showVisualisation(type, assetId);
    if (data.EmbedUrl) {
      localStorage.setItem("qs", data.EmbedUrl);
      setActivePage("quicksight");
    }
  }
  return (
    <div className="container">
      <Navbar setActivePage={setActivePage} isQS={false} />
      <div className="list-container">
        <div>
          {Assets?.Analysis && <h4 className="list-title">Asset: Analysis</h4>}
          <ul>
            {Assets?.Analysis?.map((record) => {
              return (
                <li key={record.AnalysisId} onClick={() => goTo("analysis", record.AnalysisId)}>
                  {" "}
                  <span>{record.Name}</span>
                  <span className="record-id">{record.AnalysisId}</span>
                  <img alt="Right Arrow" className="assets" src="./right-arrow.svg" />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
        {Assets?.Dashboards && <h4 className="list-title">Asset: Dashboard</h4>}
          <ul>
            {Assets?.Dashboards?.map((record) => {
              return (
                <li key={record.DashboardId} onClick={() => goTo("dashboard", record.DashboardId)}>
                  <span>{record.Name}</span>
                  <span className="record-id">{record.DashboardId}</span>
                  <img alt="Right Arrow" className="assets" src="./right-arrow.svg" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
