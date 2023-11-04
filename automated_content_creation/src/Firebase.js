import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import firebase, { provider } from "./firebase"; // Import the Firebase configuration

function Firebase() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(firebase.auth(), provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  });

  return (
    <div>
      {value ? <Home /> : <button onClick={handleClick}>Login</button>}
    </div>
  );
}

export default Firebase;
