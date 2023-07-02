import { React, useContext } from "react";
import Background from "../../../images/Background.png"; //
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileStyles.css";
import PROFILE_HEADING from "./profile-heading";
import CARD_BODY from "./Card_body";
import { UserContext } from "../../../App";

function App() {
  const { UserData, setUserData } = useContext(UserContext);
  console.log(UserData);
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
          Follower={UserData.Follow.length}
          Following={UserData.Following.length}
          joinDate ={UserData.joinDate}
        />
      </div>
    </div>
  );
}

export default App;
