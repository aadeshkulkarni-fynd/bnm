import React, { useEffect, useState } from "react";
import { ListOfAssets, showVisualisation } from "../services/asset";
export const List = ({ setActivePage }) => {
  const [Assets, setAssets] = useState({});
  useEffect(() => {
    async function getAssets() {
      const response = await ListOfAssets();
      console.log("List: ", response);
      setAssets(response);
    }
    getAssets();
  }, []);

  async function goTo(type, assetId) {
    console.log(assetId);
    const data = await showVisualisation(type, assetId);
    console.log("QS Response: ", data);
    if (data.EmbedUrl) {
      localStorage.setItem("qs", data.EmbedUrl);
      setActivePage("quicksight");
    }
  }
  return (
    <div className="container">
      <div className="list-container">
        <div>
          {Assets.Analysis && <h4 className="list-title">Asset: Analysis</h4>}
          <ul>
            {Assets?.Analysis?.map((record) => {
              return (
                <li onClick={() => goTo("analysis", record.AnalysisId)}>
                  {" "}
                  <span>{record.Name}</span>
                  <span className="record-id">{record.AnalysisId}</span>
                  <img className="assets" src="./right-arrow.svg" />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
        {Assets.Dashboards && <h4 className="list-title">Asset: Dashboard</h4>}
          <ul>
            {Assets?.Dashboards?.map((record) => {
              return (
                <li onClick={() => goTo("dashboard", record.DashboardId)}>
                  <span>{record.Name}</span>
                  <span className="record-id">{record.DashboardId}</span>
                  <img className="assets" src="./right-arrow.svg" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
