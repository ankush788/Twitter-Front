import React from "react";
import NameAndId from "./NameAndId";
import EditProfileButton from "../Buttons/EditProfileButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ProfileImage from "../Feed/ProfileImage";
import "./ProfileBox.css";

export default function ProfileBox() {
  return (
    <div>
      {/* Cover Image */}
      <div className="profile-box-bg">
        <img src="" alt="cover_photo"></img>
      </div>

      <div className={"profile-box"}>
        <ProfileImage
          width={133}
          height={133}
          style={{ position: "absolute", bottom: "150px" }}
        />

        <div className="d-flex justify-content-end">
          <EditProfileButton />
        </div>

        <NameAndId />

        {/* Information */}
        <div className="profile-box-info">
          <p>
            <CalendarMonthIcon
              sx={{ fontSize: "16px" }}
              style={{ verticalAlign: "center" }}
            />{" "}
            Joined May 2023{" "}
          </p>
          <p>
            <strong> 10 </strong> Following <strong> 2 </strong> Followers{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
