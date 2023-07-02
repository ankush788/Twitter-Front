import React from "react";
import SideBar from "../ExploreComponent/SideBarComponent/SideBar";
import ProfileIntegrated from "./ProfileSubComponent/ProfileIntegrated";
import MobileNavbar from "../Navbars/MobileNavbar";
import SidePanel from "../SidePanel/SidePanel";
import SearchBar from "../ExploreComponent/SearchBarComponent/SearchBar";
import "./ProfilePageStyles.css";

export default function App() {
  const Styling = {
    marginLeft: "0",
    position: "sticky",
    top: "2%",
    backgroundColor: "rgba(182, 182, 184, 0.129)",
    boxShadow: " 0 0 5px 0 #01000097",
  };

  return (
    <div className="row" id="ProfilePage">
      <div className=" col-3 SideBar">
        <SideBar />
      </div>

      <div className=" col-5 ">
        <ProfileIntegrated />
      </div>
      <div className="col-4 SidePanel ">
        {" "}
        <SearchBar width={"24rem"} height={"4rem"} Style={Styling} />
        <div className="py-4">
          <SidePanel />
        </div>
      </div>

      <div className="MobileNavbar">
        <MobileNavbar />
      </div>
    </div>
  );
}
