import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginStyle.css";
import LoginButton from "./LoginButtom";
import TwitterIcon from "@mui/icons-material/Twitter";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import GoogleImage from "../../images/google24.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
///---------------------------imports---------------------//

//-------------------------login function ------------------//
export default function Login() {
  const navigate = useNavigate();
  //----------------------------global state------------------//
  const { UserData, setUserData } = useContext(UserContext);
  //-----------------Login Data status---------------------//
  const [LoginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  //---------------------------Visibility----------------------//
  const [Visibility, setVisibility] = useState(false);
  function changeVisiblity() {
    const val = !Visibility;
    setVisibility(val);
  }
  //--------------------------------- Login data state handler----------------//
  function HandleData(event) {
    const { name, value } = event.target;
    return setLoginData((prev) => ({ ...prev, [name]: value }));
  }

  //--------------------------GoogleAuthentication----------------------------//
  async function GoogleAuthentication() {
    const win = window.open("http://localhost:4000/auth/google", "_self");
  }

  //----------------------------- for transfer login data--------------------//
  async function LoginDataTransfer() {
    try {
      const response = await axios.post(
        "https://https://twitter-backend-flame.vercel.app/route/login",
        LoginData,
        {
          withCredentials: true,
        }
      );

      alert(response.data.message);

      if (response.data.user) {
        setUserData(response.data.user);
        navigate("/");
      } else if (!response.data.user) {
        setLoginData({
          name: "",
          password: "",
        });
        navigate("/Login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="card " id="Login">
      <div className="TwitterIcon d-flex justify-content-center">
        <TwitterIcon style={{ fontSize: "2rem", color: "#1DA1F2" }} />
      </div>

      <h2 className="HeadingText">Sign To Twitter</h2>
      <LoginButton
        icon={GoogleImage}
        text={"Sign in with Google"}
        onClick={GoogleAuthentication}
      />

      {/* ---------------------------------- or line-------------------------------------------------- */}
      <div className="d-flex  Or-line">
        <hr />
        <button className="or">or</button>
      </div>

      <input
        className="LoginButton contact center-placeholder mb-0  "
        type="text"
        placeholder="user-name "
        name="name"
        autoComplete="true"
        value={LoginData.name}
        onChange={HandleData}
      />
      <div
        className="LoginButton contact center-placeholder mt-3 "
        style={{ width: "minContent" }}
      >
        <input
          className="center-placeholder password"
          type={`${Visibility ? "text" : "password"}`}
          placeholder="Password "
          name="password"
          value={LoginData.password}
          onChange={HandleData}
          autoComplete="true"
          style={{ border: "none" }}
        />
        <p style={{ margin: "auto 0" }} onClick={changeVisiblity}>
          {Visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </p>
      </div>
      <LoginButton
        text={"Next"}
        style={{ fontWeight: "bold", backgroundColor: "black", color: "white" }}
        onClick={LoginDataTransfer}
      />

      <div className="NotAccount d-flex">
        <p>Don't have an account? </p>
        <a href="https://twitter-front-mauve.vercel.app/Register">Sign up</a>
      </div>
    </div>
  );
}
