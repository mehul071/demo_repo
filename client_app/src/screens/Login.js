import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { loginUser } from "../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import "./Login.css";

function Login() {
  const clientId =
    "714834901268-7sh4qc0c97lcacouvtmv97fiq724urad.apps.googleusercontent.com";

  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [showLoginButton, setshowLoginButton] = useState(true);
  const [showLogoutButton, setshowLogoutButton] = useState(false);
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginUserReducer);
  const { success, loading, error } = loginState;
  useEffect(() => {
    if (localStorage.getItem("current_user")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = {
      email: userEmail,
      password: userPassword,
    };
    dispatch(loginUser(user));
  }
  const onLoginSuccess = (res) => {
    console.log("login success", res.profileObj);
    setshowLoginButton(false);
    setshowLogoutButton(true);
    const user = {
      email: userEmail,
    };
    dispatch(loginUser(user));
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

        {/* <div>
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
          <p className="or">or</p> */}

        <div className="input_1">
          <input
            type="email"
            placeholder="Email"
            className="input_email"
            value={userEmail}
            onChange={(e) => {
              setuserEmail(e.target.value);
            }}
          />
        </div>
        <div className="input_2">
          <input
            type="password"
            placeholder="Password"
            className="input_password"
            value={userPassword}
            onChange={(e) => {
              setuserPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="signin_btn" onClick={login}>
            Sign in
          </button>
        </div>
        <p className="new_account">
          Don't have an account?
          <a href="/register" className="redirect_register">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
