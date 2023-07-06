import { React, useState, useContext } from "react";
import ProfileImage from "./ProfileImage";
import CollectionsIcon from "@mui/icons-material/Collections";
import GifBoxIcon from "@mui/icons-material/GifBox";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import GeneralButton from "../Buttons/GeneralButton";
import "./TweetArea.css";
import axios from "axios";
import { UserContext } from "../../App";

//-----------------------import------------------------------------//

export default function TweetArea(props) {
  //---------------------------------- shared state of user------------------------------------------------------//
  const { UserData } = useContext(UserContext);

  //-------------------------------------------------state  of tweet and its function ---------------------------------------//
  const [Tweet, SetTweet] = useState("");

  async function TweetData(e) {
    const { value } = e.target;
    return SetTweet(value);
  }

  async function TransferData() {
    if (!Tweet) {
      alert("Tweet is empty");
    } else {
      try {
        const response = await axios.post(
          "https://twitter-backend-flame.vercel.app/data/Tweet",
          {
            tweet: Tweet,
            name: UserData.name,
            email: UserData.email,
            parentId: props.parentId,
            photoLink: UserData.photoLink,
          },
          { withCredentials: true }
        );
         // alert(response.data.message);
        SetTweet("");

        window.location.reload();
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
  }

  //---------------------------------------return code ---------------------------------------------------//
  return (
    <div className={"d-flex tweet-area"}>
      <ProfileImage
        style={{ margin: "4px 14px 0 0" }}
        width={52}
        height={52}
        photoLink={UserData.photoLink}
      />

      <div className="d-flex flex-column" style={{ width: "100%" }}>
        {/*  user text data  field  */}
        <textarea
          placeholder={props.text ? props.text : "What is happening?!"}
          className={"tweet-area-text-area"}
          value={Tweet}
          onChange={TweetData}
          style={{ paddingBottom: props.paddingBottom }}
        ></textarea>

        <div
          className={"d-flex my-2 align-items-center justify-content-between"}
        >
          <div className={"d-flex"}>
            <a href="#">
              {" "}
              <CollectionsIcon
                className={"ms-1"}
                fontSize="small"
                sx={{ color: "#1da1f2" }}
              />{" "}
            </a>
            <a href="#">
              {" "}
              <GifBoxIcon
                className={"ms-3"}
                fontSize="small"
                sx={{ color: "#1da1f2" }}
              />{" "}
            </a>
            <a href="#">
              {" "}
              <SentimentSatisfiedAltIcon
                className={"ms-3"}
                fontSize="small"
                sx={{ color: "#1da1f2" }}
              />{" "}
            </a>
          </div>

          <GeneralButton
            type="submit"
            buttonColor={Tweet ? "btn btn-primary" : "btn btn-primary disabled"}
            color="white"
            text="Tweet"
            onClick={TransferData}
          />
        </div>
      </div>
    </div>
  );
}
