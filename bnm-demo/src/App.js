import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "./components/Login";
import { useState } from "react";
import { List } from "./components/List";
import { Quicksight } from "./components/Quicksight";

function App() {
  const auth = localStorage.getItem("auth");
  const [activePage, setActivePage] = useState(auth ? "list" : "login");
  return (
    <div className="App">
      {activePage === "login" && <Login setActivePage={setActivePage} />}
      {activePage === "list" && <List setActivePage={setActivePage} />}
      {activePage === "quicksight" && <Quicksight setActivePage={setActivePage} />}
    </div>
  );
}

export default App;
