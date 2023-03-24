import React, { useState } from "react";
import { SignIn } from "../services/auth";
import { ToastContainer, toast } from "react-toastify";
export const Login = ({ setActivePage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function SignInHandler() {
    if (username !== "" && password !== "") {
      const response = await SignIn({ username, password });
      console.log("Response: ", response);
      if (response.auth_token) {
        localStorage.setItem("auth", response.auth_token);
        setActivePage("list");
      } else {
        console.log("Message: ", response?.detail);
        toast.error(response?.detail);
      }
    }
  }
  return (
    <div className="container">
      <div className="login-container">
        <h6 className="title">Sign in to your account</h6>
        <div className="form-control">
          <label>Username</label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-control">
          <button onClick={SignInHandler} disabled={username == "" || password == ""}>
            Sign in to BnM
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
