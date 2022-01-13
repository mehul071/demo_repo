import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { MdEmail } from "react-icons/md";
import "./Login.css";

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
    <div className="login">
      <div className="auth-options">
        <h1 className="heading">Sign in.</h1>
        <div>
          {showLoginButton ? (
            <GoogleLogin
              className="google_login_btn"
              clientId={clientId}
              buttonText="Continue with google"
              onSuccess={onLoginSuccess}
              onFailure={onFailuresSuccess}
              cookiePolicy={"single_host_origin"}
            />
          ) : null}
          <div>
            <div className="google-login">
              {showLogoutButton ? (
                <GoogleLogout
                  clientId={clientId}
                  buttonText="logout"
                  onLogoutSuccess={onSignoutSuccess}
                />
              ) : null}
            </div>
          </div>
          <p className="or">or</p>

          <div className="input_1">
            <input
              type="email"
              placeholder="Email"
              className="input_email"
            ></input>
          </div>
          <div className="input_2">
            <input
              type="password"
              placeholder="Password"
              className="input_password"
            />
          </div>
          <div>
            <button className="signin_btn">Sign in</button>
          </div>
          <p className="new_account">
            Don't have an account?
            <a href="/register">Create Account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
