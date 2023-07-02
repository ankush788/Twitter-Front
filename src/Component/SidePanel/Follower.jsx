import { React, useEffect, useState, useContext } from "react";
import SideBar from "../../Component/ExploreComponent/SideBarComponent/SideBar";
import "./FollowerPageStyle.css";
import SidePanel from "../SidePanel/SidePanel";

import SearchBar from "../../Component/ExploreComponent/SearchBarComponent/SearchBar";
import MobileNavbar from "../Navbars/MobileNavbar";
import axios from "axios";
import TwitterImage from "../../images/TwitterIcon.png";
import { UserContext } from "../../App";
import SidePanelItem from "./SidePanelItem";
// -------------------App -------------------//
export default function Follower() {
  //---------------------------------global state ----------------------------//
  const { UserData, setUserData } = useContext(UserContext);

  //----------------------------states -----------------------------//
  const [isLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState({
    toggle: true,
    Follower: [],
    Following: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        
        let  response = await axios.post(
          "https://twitter-backend-flame.vercel.app/follow/FollowAndFollowing",
          { UserId: UserData.userId },
          {
            withCredentials: true,
          }
        );

        console.log(response.data.follower,response.data.following);
        setData((prev) => ({
            toggle : prev.toggle,
          Follower: response.data.follower,
          Following: response.data.following,
        }));
        setIsLoading(false);
       
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function setToggle() {
    const value = !Data.toggle;

    setData((prev) => ({ ...prev, toggle: value }));
  }

  //--------------------------side barStyle and follow style  -------------------------//
  const Styling = {
    marginLeft: "0",
    position: "sticky",
    top: "2%",
    backgroundColor: "rgba(182, 182, 184, 0.129)",
    boxShadow: " 0 0 5px 0 #01000097",
  };

  const NameStyle = { border: "solid #51aaf3", borderWidth: "0 0 2px" };
  //--------------------------return code ------------------------//

  //------------------------------during loading--------------------------//
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          paddingTop: "20rem",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            display: "flex",
            height: "2rem",
            width: "2rem",
            padding: "auto 0",
          }}
          src={TwitterImage}
          alt="Twitter"
        />
      </div>
    );
  }

  //------------------------------when data loaded-------------------------------------//
  return (
    <div className="row" id="FollowPage">
      <div className=" col-3 SideBar">
        <SideBar />
      </div>

      <div className=" col-5 FollowPanel card ">
        <div className="p-3">
          <b>{UserData.name}</b>
        </div>
        <div className="nameBar d-flex justify-content-evenly">
          <div
            className="Name"
            style={Data.toggle === true ? NameStyle : {}}
            onClick={setToggle}
          >
            {" "}
            Follow
          </div>
          <div
            className="Name"
            style={Data.toggle === true ? {} : NameStyle}
            onClick={setToggle}
          >
            Following
          </div>
        </div>
        <div
          className="p-2 Follow"
          style={{ display: `${Data.toggle === true ? "" : "none"}` }}
        >
          {Data.Follower.map((value) => (
            <SidePanelItem
              name={value.name}
              email={value.email}
              photoLink={value.photoLink}
              id={value._id}
              key={value._id}
              UserId={UserData.userId}
            />
          ))}
        </div>

        <div
          className="p-2 Following"
          style={{ display: `${Data.toggle === true ? "none" : ""}` }}
        >
          {Data.Following.map((value) => (
            <SidePanelItem
              name={value.name}
              email={value.email}
              photoLink={value.photoLink}
              id={value._id}
              key={value._id}
              UserId={UserData.userId}
            />
          ))}
        </div>
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
