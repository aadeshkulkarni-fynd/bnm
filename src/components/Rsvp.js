import { useState, useEffect } from "react";
import Spinner from "react-spinkit";
const Rsvp = () => {
  const [loading, setLoading] = useState(true);
  const [url] = useState(localStorage.getItem("qs"));

  useEffect(() => {
    document.getElementById("ifDashboard").setAttribute("src", url);
  }, []);
  const hideSpinner = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="qs-container">
          <Spinner className="loading text-center"  name="cube-grid" color="black" fadeIn="none" />
        </div>
      ) : null}
      <iframe title="Dashboard" onLoad={hideSpinner} id="ifDashboard" />
    </>
  );
};
export default Rsvp;
