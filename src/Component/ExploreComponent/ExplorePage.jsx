import React from "react";
import SearchBar from "./SearchBarComponent/SearchBar";
import Section from "./SectionComponent/Section";
import Trending from "./TrendingComponent/Trending";
import SideBar from "./SideBarComponent/SideBar";
import MobileNavbar from "../Navbars/MobileNavbar";
import SidePanel from "../SidePanel/SidePanel";
import "./ExplorePageStyles.css";

export default function ExplorePage() {
  const Styling = {
    marginLeft: "0",
    position: "sticky",
    top: "2%",
    backgroundColor: "rgba(182, 182, 184, 0.129)",
    boxShadow: " 0 0 5px 0 #01000097",
  };

  return (
    <div className="row" id="Explore">
      {/*  MobileNavbar and Sidebar */}
      <div className=" col-3 SideBar">
        <SideBar />
      </div>

      <div className=" col-5 ">
        <div className="TopHeading">
          <div class=" Search ">
            <SearchBar
              width={"90%"}
              height={"4rem"}
              Style={{
                backgroundColor: "rgba(182, 182, 184, 0.129)",
                boxShadow: " 0 0 5px 0 #01000097",
              }}
            />
          </div>

          <div className="Section" style={{ paddingTop: "1rem" }}>
            <Section />
          </div>
        </div>

        <div className="Trending ">
          <Trending />
        </div>
      </div>

      {/* sidePanel */}
      <div className="col-4 SidePanel">
        {" "}
        <div className="Search">
          <SearchBar width={"24rem"} height={"4rem"} Style={Styling} />
        </div>
        <div className="py-1">
          <SidePanel />
        </div>
      </div>

      {/* middle container  */}
      <div className="MobileNavbar">
        <MobileNavbar />
      </div>
    </div>
  );
}
