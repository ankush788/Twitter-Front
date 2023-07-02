import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideBarStyles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import SideButton from "./SideAttribute";
import { useNavigate } from "react-router-dom";
//-----------------------imports-----------------------//

//-------------------------SideBar----------------------//
export default function SideBar() {
  const navigate = useNavigate();
  //------------------Logout-------------------//
  async function LogoutUser() {
    try {
      const response = await axios.get(
        "https://twitter-backend-sooty.vercel.app/route/logout",
        {
          withCredentials: true,
        }
      );
      alert(response.data.message);
      if (response.data.success) {
        navigate("/Login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  //--------------active index for button effect-----------------//

  return (
    <div id="SideBar">
      {/* //----------------------// */}
      <button
        className="Twitter d-flex"
        onClick={() => {
          navigate("/");
        }}
      >
        <TwitterIcon style={{ fontSize: "2rem", color: "#1DA1F2" }} />
      </button>

      {/* //--------- Home---------// */}

      <SideButton
        Icon={<HomeIcon style={{ fontSize: "2rem" }} />}
        value={"Home"}
      />
      {/* //--------------Hastag-------------// */}

      <SideButton
        Icon={<TagIcon style={{ fontSize: "2rem" }} />}
        value={"Explore"}
      />

      {/* //-------------- profile-------------------// */}
      <SideButton
        Icon={<PersonIcon style={{ fontSize: "2rem" }} />}
        value={"Profile"}
      />

      {/* //---------------Logout ----------------// */}

      <button
        className=" btn btn-primary btn-lg rounded-pill Tweet  "
        onClick={() => LogoutUser()}
      >
        <b>Log Out</b>
      </button>
    </div>
  );
}
