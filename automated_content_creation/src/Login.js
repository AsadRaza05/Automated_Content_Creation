import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import { auth, provider } from "./config";
import { useNavigate } from "react-router-dom";


function Login() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const handleClick = () => {
        signInWithPopup(auth,provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
            navigate("/Home");
        })
    }

    useEffect (() => {
        setValue(localStorage.getItem('email'))
    })

return (    
    <div className="login-container">
        <h1>Login to Your Account</h1>
        <p>Welcome to Automated Content Creation. Sign in to get started.</p>
        {value?<Home/>:
        <button onClick = {handleClick}>Login</button>
        }
    </div>
    
);

}


export default Login;
  