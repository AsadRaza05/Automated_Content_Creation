// import React, { useEffect, useState } from "react";
// import { signInWithPopup } from "firebase/auth";
// import Home from "./Home";
// import { auth, provider } from "./config";


// function Login() {
//     const [value, setValue] = useState('')
//     const handleClick = () => {
//         signInWithPopup(auth,provider).then((data) => {
//             setValue(data.user.email)
//             localStorage.setItem("email", data.user.email)
//         })
//     }

//     useEffect (() => {
//         setValue(localStorage.getItem('email'))
//     })

// return (
//     <div>
//         {value?<Home/>:
//         <button onClick = {handleClick}>Login</button>
//         }
//     </div>

    
// );

// }


// export default Login;
  

import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth, provider } from "./config";
import "./App.css"; // Import your CSS for styling

function Login() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  });

  return (
    <div className="login-container">
      <h1>Login to Your Account</h1>
      <p>Welcome to Automated Content Creation. Sign in to get started.</p>
      {value ? (
        <Link to="/Home">Continue to Home</Link>
      ) : (
        <button onClick={handleClick}>Login with Google</button>
      )}
    </div>
  );
}

export default Login;

