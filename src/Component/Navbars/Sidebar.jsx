import React from "react";
import NavItem from "./NavItem";
import { faHouse, faHashtag, faUser } from "@fortawesome/free-solid-svg-icons";
import TwitterIcon from '@mui/icons-material/Twitter';
import ProfileImage from "../src/Component/OutsouresContent/ProfileImage";
import "./Sidebar.css";

export default function Sidebar() {

    return (
        <div className="d-inline-flex flex-column align-items-end p-2 sidebar">
            
                {/* Main Logo */}
                <a href="/" className="p-3">
                    <TwitterIcon fontSize="large" sx={{ color: "#1da1f2" }} />
                </a>

                {/* Icons */}
                <ul className="nav flex-column mb-auto text-center">
                    <NavItem link={"/"} iconName={faHouse} iconColor={"black"} iconSize={"xl"} />
                    <NavItem link={"/explore"} iconName={faHashtag} iconColor={"black"} iconSize={"xl"} />
                    <NavItem link={"/profile"} iconName={faUser} iconColor={"black"} iconSize={"xl"} />
                </ul>

                {/* Profile Icon */}
                <div className="dropdown border-top">
                    <a href="#" className="d-flex align-items-center justify-content-center p-3 link-body-emphasis dropdown-toggle" data-bs-toggle="dropdown">
                        <ProfileImage width={46} height={46} />
                    </a>

                    <ul className="dropdown-menu text-small shadow">
                        <li>
                            <a className="dropdown-item" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            
        </div>
    );
}