import React, { useState, useContext, useEffect } from "react";
import SidePanelItem from "./SidePanelItem";
import "./SidePanel.css";
import { UserContext } from "../../App";
import axios from "axios";
//--------------------------import -------------------------//
export default function SidePanel(props) {
  const { UserData, setUserData } = useContext(UserContext);

  //--------------------------recommendation ----------------//
 
  const [Recommend, setRecommend] = useState([]);

  useEffect(() => {
    async function UserRecommendation() {
      try {
        const response = await axios.post(
          "https://twitter-backend-flame.vercel.app/data/Recommendation",
          { name: UserData.name },
          { withCredentials: true }
        );

        setRecommend(response.data.people);
      } catch (err) {
        console.log(err);
      }
    }
    UserRecommendation();
  }, []);
  //---------------------------return code ---------------------//
  return (
    <div
      className={
        "d-inline-flex bgc-white side-panel justify-content-center " +
        props.classNames
      }
      id="SidePanel"
    >
      <ul className="list-group">
        <h5 className=" p-0 heading">Who to follow</h5>

        {Recommend.map((value) => (
          <SidePanelItem
            name={value.name}
            email={value.email}
            photoLink={value.photoLink}
            id={value._id}
            key={value._id}
            UserId={UserData._id}
          />
        ))}
      </ul>
    </div>
  );
}
