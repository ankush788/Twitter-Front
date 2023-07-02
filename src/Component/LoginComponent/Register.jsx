import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginStyle.css";
import LoginButton from "./LoginButtom";
import TwitterIcon from "@mui/icons-material/Twitter";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export default function Register() {
  const navigate = useNavigate();

  /// Registeration  schema
  const [RegisterData, setRegisterData] = useState({
    email: "",
    name: "",
    password: "",
  });

  //---------------------------Visibility----------------------//
  const [Visibility, setVisibility] = useState(false);
  function changeVisiblity() {
    const val = !Visibility;
    setVisibility(val);
  }

  //---------------------------------
  function HandleData(event) {
    const { name, value } = event.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  }

  //----------for validaing email format---//
  function validateEmail(email) {
    return isEmail(email);
  }
  async function RegisterTransferData() {
    if (RegisterData.email && RegisterData.name && RegisterData.password) {
      //--------------checking email format ----------------//
      if (!validateEmail(RegisterData.email)) {
        alert("Invalid email format");
        window.location.reload();
        return;
      }
      try {
        const response = await axios.post(
          "https://twitter-backend-sooty.vercel.app/route/register",
          {
            email: RegisterData.email,
            name: RegisterData.name,
            password: RegisterData.password,
          },
          { withCredentials: true }
        );

        alert(response.data.message);

        //// sucess
        if (response.data.user) {
          setRegisterData({
            email: "",
            name: "",
            password: "",
          });
          navigate("/Login");
        } else if (!response.data.user) {
          setRegisterData({
            email: "",
            name: "",
            password: "",
          });
          navigate("/Register");
        }
      } catch (err) {
        console.log(err);
      }
    }
    /// not complete detail
    else {
      alert("fill all details");
      navigate("/Register");
      return;
    }
  }

  return (
    <div className="card " id="Register">
      <div className="TwitterIcon d-flex justify-content-center">
        <TwitterIcon style={{ fontSize: "2rem", color: "#1DA1F2" }} />
      </div>
      <h2 className="HeadingText "> Register </h2>
      <input
        className="LoginButton contact center-placeholder "
        name="email"
        type="email"
        placeholder="Email"
        value={RegisterData.email}
        onChange={HandleData}
        required
      />

      <input
        className="LoginButton contact center-placeholder "
        type="text"
        name="name"
        placeholder="User-Name"
        value={RegisterData.name}
        onChange={HandleData}
        required
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
          value={RegisterData.password}
          onChange={HandleData}
          autoComplete="true"
          style={{ border: "none" }}
        />
        <p
          style={{ position: "relative", left: "10%", top: "20%" }}
          onClick={changeVisiblity}
        >
          {Visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </p>
      </div>
      <LoginButton
        text={"Next"}
        style={{ fontWeight: "bold", backgroundColor: "black", color: "white" }}
        onClick={RegisterTransferData}
      />
    </div>
  );
}
