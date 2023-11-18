import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      const userEmail = data.user.email;
      setValue(userEmail);
      localStorage.setItem("email", userEmail);
      navigate("/Home", { state: { userEmail } });
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  }, []);

  return (
    <div className="login-container">
      <h1>Login to Your Account</h1>
      <p>Welcome to Automated Content Creation. Sign in to get started.</p>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;
