import React, { useState } from "react";

import { GoogleLogin, GoogleLogout } from "react-google-login";


const Login = () => {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  

  const setLogin = (response) => {
    console.log("Login success", response);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const setFaliure = (response) => {
    console.log("Login failed", response);
  };

  const onSignout = () => {
    alert(`You've signed out successfully`);
    setShowLoginButton(true);
    setShowLogoutButton(false);
    console.clear();
  };

  return (
    <>

      {showLoginButton ? (
        <GoogleLogin
          clientId='731515314147-nsanqiada2ompf6ugc7v8vqil3kkabnb.apps.googleusercontent.com'
          buttonText='Login with Google'
          onSuccess={setLogin}
          onFailure={setFaliure}
          cookiePolicy={"single_host_origin"}
          className='login'
        />
      ) : null}

      {showLogoutButton ? (
        <GoogleLogout
          clientId='731515314147-nsanqiada2ompf6ugc7v8vqil3kkabnb.apps.googleusercontent.com'
          buttonText='Logout'
          onLogoutSuccess={onSignout}
          className='logout'></GoogleLogout>
      ) : null}
    </>
  );
};

export default Login;
