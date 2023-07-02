import { React,useEffect, useContext, useState  } from "react";
import Background from "../../../images/Background.png"; //
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileStyles.css";
import PROFILE_HEADING from "./profile-heading";
import CARD_BODY from "./Card_body";
import { UserContext } from "../../../App";

function App() {
  let Follow =0; 
  let Following = 0;
  const { UserData, setUserData } = useContext(UserContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          "https://twitter-backend-flame.vercel.app/follow/FollowData",
          { UserId: UserData.userId },
          {
            withCredentials: true,
          }
        );

        console.log(response);
          Follow : response.data.Follow,
          Following: response.data.Following,
        
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="row  justify-content-center" id="Profile">
      <div className="card ">
        <PROFILE_HEADING name={UserData.name} />

        <img
          src={Background}
          class="card-img-top"
          alt="background"
          id="profile-background-img"
        />
        <CARD_BODY
          name={UserData.name}
          photoLink={UserData.photoLink}
          Follower={Follow}
          Following={Following}
          joinDate ={UserData.joinDate}
        />
      </div>
    </div>
  );
}

export default App;
