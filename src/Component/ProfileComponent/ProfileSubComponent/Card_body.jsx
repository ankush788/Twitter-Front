import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CARD_TEXT from "./Card_text";
import PersonImage from "../../../images/personImage.png";

function Card_body(props) {
  const Image = props.photoLink;

  //------------------------------------------return code----------------------//
  return (
    <div className="card-body">
      <div className="profile-main">
        <img
          src={Image ? Image : PersonImage}
          alt="Profile"
          className=" img-fluid image"
          id="profile-main-img"
        />
        <butttom class="badge rounded-pill bg-primary Edit-profile bt-lg ">
          Edit Profile
        </butttom>
      </div>

      <CARD_TEXT
        Name={props.name}
        Join={props.joinDate}
        Follower={`${props.Follower} Follower`}
        Following={`${props.Following} Following`}
      />

    </div>
  );
}
export default Card_body;
