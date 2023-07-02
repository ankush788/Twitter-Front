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
import SideAttribute from "./SideAttribute";

export default function SideBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  function HandleClick(index) {
    return setActiveIndex(index);
  }
  return (
    <div id="SideBar">
      <button className="Twitter d-flex">
        <TwitterIcon />
      </button>
      <SideAttribute
        ActiveIndex={activeIndex}
        index={4}
        filled={<PersonIcon />}
        outline={<PersonOutlineIcon />}
        clickFunction={(index) => HandleClick(index)}
        value={"Profile"}
      />

      <button className=" btn btn-primary rounded-pill  Tweet">Tweet</button>
    </div>
  );
}
