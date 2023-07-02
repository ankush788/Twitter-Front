import { React,useEffect, useContext, useState  } from "react";
import Background from "../../../images/Background.png"; //
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileStyles.css";
import PROFILE_HEADING from "./profile-heading";
import CARD_BODY from "./Card_body";
import { UserContext } from "../../../App";

function App() {
  const { UserData, setUserData } = useContext(UserContext);
   let [Follow, setFollow] = useState({ totalFollow: 0, totalFollowing: 0 });
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
        setFollow({
          totalFollow: response.data.Follow,
          totalFollowing: response.data.Following,
        });
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
          Follower={Follow.totalFollow}
          Following={Follow.totalFollowing}
          joinDate ={UserData.joinDate}
        />
      </div>
    </div>
  );
}

export default App;
