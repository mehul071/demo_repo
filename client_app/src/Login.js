import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function Login() {
  const clientId =
    "714834901268-7sh4qc0c97lcacouvtmv97fiq724urad.apps.googleusercontent.com";
  const [showLoginButton, setshowLoginButton] = useState(true);
  const [showLogoutButton, setshowLogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("login success", res.profileObj);
    setshowLoginButton(false);
    setshowLogoutButton(true);
  };
  const onFailuresSuccess = (res) => {
    console.log("login failed", res);
  };
  const onSignoutSuccess = () => {
    alert("Sign out success");
    setshowLoginButton(true);
    setshowLogoutButton(false);
  };
  return (
    <div>
      {showLoginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onFailuresSuccess}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {showLogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="logout"
          onLogoutSuccess={onSignoutSuccess}
        />
      ) : null}
    </div>
  );
}

export default Login;
