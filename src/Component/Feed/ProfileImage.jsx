import { React, useContext } from "react";
import Image from "../../images/personImage.png";
export default function ProfileImage(props) {
  const imageStyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    ...props.style,
  };

  const photoLink = props.photoLink;
  return (
    <img
      className={"rounded-circle"}
      src={photoLink ? photoLink : Image}
      alt="profile_image"
      style={imageStyle}
    />
  );
}
