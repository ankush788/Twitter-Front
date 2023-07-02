import { React, useState, useEffect, useContext } from "react";
import NavItem from "./NavItem";
import "./MobileNavbar.css";
import { faHouse, faHashtag, faUser } from "@fortawesome/free-solid-svg-icons";
import ProfileImage from "../Feed/ProfileImage";
import { UserContext } from "../../App";
import GeneralButton from "../Buttons/GeneralButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//------------------import--------------------------------------//
export default function MobileNavbar() {
  const { UserData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  async function LogoutUser() {
    try {
      const response = await axios.get(
        "https://twitter-backend-flame.vercel.app/route/logout",
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

  return (
    <div
      className="fixed-bottom bgc-white mobile-navbar"
      style={{ paddingBottom: "0rem" }}
    >
      <ul className="nav justify-content-between mx-5">
        <NavItem
          link={"/"}
          iconName={faHouse}
          iconColor={"black"}
          iconSize={"lg"}
          style={{ padding: ".5rem" }}
        />
        <NavItem
          link={"/Explore"}
          iconName={faHashtag}
          iconColor={"black"}
          iconSize={"lg"}
          style={{ padding: ".5rem" }}
        />
        <NavItem
          link={"/Profile"}
          iconName={faUser}
          iconColor={"black"}
          iconSize={"lg"}
          style={{ padding: ".5rem" }}
        />

        <div className="d-flex">
          <ProfileImage width={44} height={44} photoLink={UserData.photoLink} />
          <div className="dropup">
            <a
              href="javascript:void(0)"
              className="d-flex align-items-center justify-content-center  link-body-emphasis dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{ padding: "0.75rem", paddingLeft: "0.25rem" }}
            ></a>
            <ul
              className="dropdown-menu text-small p-0 m-0 "
              style={{ borderWidth: "0", width: "20%" }}
            >
              <li
                className="m-0"
                style={{
                  width: "20%",
                  paddingLeft: "4rem",
                }}
              >
                <a
                  className="dropdown-item text-small "
                  href="javascript:void(0)"
                  style={{ color: "grey" }}
                  onClick={LogoutUser}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
