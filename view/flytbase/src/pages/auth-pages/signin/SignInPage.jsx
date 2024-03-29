import "./SignInPage.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../utils/auth/useToken";
import { instance } from "../../../utils/axios/axios";
export default function SignInPage() {
  const [, setToken] = useToken();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  function handleCredentials(event) {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }

  async function handleSignIn() {
    const response = await instance.post("/signin", {
      email: credentials.email,
      password: credentials.password
    })

    const { token } = response.data;
    setToken(token);

    navigate("/verify-email-notification", {
      replace: true
    })
  }

  function handleLogIn() {
    navigate("/login");
  }
  return (
    <div className="SignInPage auth-card">
      <h1>Sign In</h1>
      <input
        type="email"
        name="email"
        placeholder="someone@gmail.com"
        value={credentials.email}
        onChange={handleCredentials}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleCredentials}
        placeholder="password"
      />
      <input
        type="password"
        name="confirm_password"
        value={credentials.confirm_password}
        onChange={handleCredentials}
        placeholder="confirm password"
      />
      <hr />
      <button
        disabled={
          !credentials.email ||
          !credentials.password ||
          credentials.password !== credentials.confirm_password
        }
        onClick={handleSignIn}
      >
        SignIn
      </button>
      <button onClick={handleLogIn}> Have an account? LogIn</button>
    </div>
  );
}
