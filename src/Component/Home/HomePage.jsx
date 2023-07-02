import { React, useEffect, useState } from "react";
import SideBar from "../../Component/ExploreComponent/SideBarComponent/SideBar";
import "./HomePageStyle.css";
import SidePanel from "../SidePanel/SidePanel";
import TweetArea from "../Feed/TweetArea";
import Tweet from "../Feed/Tweet";
import SearchBar from "../../Component/ExploreComponent/SearchBarComponent/SearchBar";
import MobileNavbar from "../Navbars/MobileNavbar";
import axios from "axios";
import TwitterImage from "../../images/TwitterIcon.png";

// -------------------App -------------------//
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [Tweets, setTweets] = useState([]);

  useEffect(() => {
    async function TweetData() {
      try {
        const response = await axios.get("/data/AllTweet", {
          withCredentials: true,
        });

        setTweets(response.data.user);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    TweetData();
  }, []);

  const Styling = {
    marginLeft: "0",
    position: "sticky",
    top: "2%",
    backgroundColor: "rgba(182, 182, 184, 0.129)",
    boxShadow: " 0 0 5px 0 #01000097",
  };
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
    <div className="row" id="HomePage">
      <div className=" col-3 SideBar">
        <SideBar />
      </div>

      <div className=" col-5 TweetPanel card p-0 ">
        <div className="Heading">
          <b>Home</b>
        </div>
        <TweetArea parentId={""} />

        {Tweets.map((value) => (
          <Tweet
            key={value._id}
            id={value._id}
            tweet={value.tweet}
            name={value.name}
            email={value.email}
            parentId={value.parentId}
            photoLink={value.photoLink}
          />
        ))}
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
