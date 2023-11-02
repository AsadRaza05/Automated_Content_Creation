import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

function Login() {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth,provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect (() => {
        setValue(localStorage.getItem('email'))
    })

return (
    <div>
        {value?<Home/>:
        <button onClick = {handleClick}>Login</button>
        }
    </div>
);

}

export default Login;