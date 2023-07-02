import React, { useState, useEffect } from "react";
import GeneralButton from "../Buttons/GeneralButton";
import NameAndId from "../ProfileBox/NameAndId";
import ProfileImage from "../Feed/ProfileImage";
import "./SidePanel.css";
import axios from "axios";

//---------------------------imports---------------------------------------------//
export default function SidePanelItem(props) {
  //-----------------------Follow----------------------------//
  const [Follower, setFollower] = useState(false);

  async function FollowData(UserId, publicId) {
    try {
      const response = await axios.post(
        "https://twitter-backend-flame.vercel.app/follow/UserFollower",
        { UserId, publicId },
        { withCredentials: true }
      );

      if (response.data) {
        setFollower(response.data.sucess);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function IntialFollowerData() {
      try {
        const response = await axios.post(
          "https://twitter-backend-flame.vercel.app/follow/IntialUserFollower",
          { UserId: props.id, publicId: props.UserId },
          { withCredentials: true }
        );

        if (response.data) {
          setFollower(response.data.sucess);
        }
      } catch (err) {
        console.log(err);
      }
    }
    IntialFollowerData();
  }, []);
  //---------------------------return code ---------------------//
  return (
    <li className="d-flex list-group-item my-1 bgc-white side-panel-item  ">
      {/* Image */}
      <div className="me-1 pe-2">
        <a
          href="#"
          className="anchor d-inline-flex align-items-center justify-content-center"
        >
          <ProfileImage photoLink={props.photoLink} width={46} height={46} />
        </a>
      </div>

      {/* Content */}
      <div className="d-flex align-items-center justify-content-between side-panel-item-content">
        <NameAndId name={props.name} email={props.email} />
        <GeneralButton
          // bgc="rgb(39, 44, 48)"
          buttonColor={
            Follower ? "btn btn-outline-primary" : " btn btn-primary"
          }
          text={Follower ? "Following" : "Follow"}
          style={
            Follower
              ? {
                  border: "solid",
                  borderWidth: "0.5px",
                  paddingBottom: "0.2rem",
                }
              : {}
          }
          color={Follower ? "" : "white"}
          onClick={() => {
            FollowData(props.id, props.UserId);
          }}
        />
      </div>
    </li>
  );
}
