import { React, useState, useEffect, useContext } from "react";
import "./Tweet.css";
import ProfileImage from "./ProfileImage";
import NameAndId from "../ProfileBox/NameAndId";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../../App";
import TweetComment from "./TweetComment";
import TweetArea from "./TweetArea";
//--------------------------imports-----------------------------------//
export default function Tweet(props) {
  const { UserData, setUserData } = useContext(UserContext);
  const LikeStyle = {
    color: "#FF6666",
    fontSize: "22px",
    display: "flex",
    paddingTop: "3px",
  };
  const tweet_id = props.id;
  const username = UserData.name;
  const parentId = props.parentId;
  //-------------------------------------------------------comment data -------------------------------------------//
  const [commentState, setCommentState] = useState({
    switch: false,
    commentSize: 0,
    comments: [],
  });

  //----------- Fetching comment ----//
  async function CommentData() {
    try {
      const response = await axios.post(
        "https://twitter-backend-sooty.vercel.app/data/AllComment",
        { parentId: tweet_id },
        { withCredentials: true }
      );

      setCommentState((prev) => ({
        ...prev,
        commentSize: response.data.size,
        comments: response.data.comment,
      }));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    CommentData();
  }, []);

  //------ toggle comment -----//
  const Togglecomment = () => {
    const val = !commentState.switch;
    setCommentState((prev) => ({
      ...prev,
      switch: val,
    }));
  };
  //----------------------------------Tweet Delete -------------------------//

  async function DeleteTweet() {
    try {
      const response = await axios.post(
        "https://twitter-backend-sooty.vercel.app/data/DeleteTweet",
        { tweet_id, username, parentId },
        {
          withCredentials: true,
        }
      );
      alert(response.data.message);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  //------------------------state for like -----------------------//
  const [like, setLike] = useState({
    sucess: false,
    totalLikes: 0,
  });

  async function fetchData() {
    try {
      const response = await axios.post(
        "https://twitter-backend-sooty.vercel.app/data/TweetLike",
        { tweet_id, username, parentId },
        {
          withCredentials: true,
        }
      );

      setLike({
        sucess: response.data.sucess,
        totalLikes: response.data.totalLikes,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // -----------starting Like Data ------------//
  useEffect(() => {
    async function IntialLike() {
      try {
        const response = await axios.post(
          "https://twitter-backend-sooty.vercel.app/data/FetchLike",
          { tweet_id, username, parentId },
          {
            withCredentials: true,
          }
        );

        setLike({
          sucess: response.data.sucess,
          totalLikes: response.data.totalLikes,
        });
      } catch (err) {
        console.log(err);
      }
    }
    IntialLike();
  }, []);
  //------------------------------return code start   -----------------------------------------------------//
  return (
    <div className="card" style={{ width: "100%" }} id="tweet">
      <div className="card-body">
        <div className="d-flex px-3">
          <div className="me-3">
            <ProfileImage width={46} height={46} photoLink={props.photoLink} />
          </div>

          <div className="d-flex flex-column" style={{ width: "100%" }}>
            <div>
              {/*------------------------------------------------------ Tweet Header---------------------------------------------------------*/}
              <div className="d-flex justify-content-between">
                <NameAndId name={props.name} email={props.email} />

                <div className="dropdown-center ">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  ></a>
                  <ul
                    className="dropdown-menu  "
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      width: "20%",
                    }}
                  >
                    <li>
                      <a
                        className=" m-0 p-0 dropdown-item   d-flex align-items-center justify-content-end "
                        href="javascript:void(0)"
                        onClick={DeleteTweet}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <DeleteIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/*----------------------------------------------------------------------- Tweet Content-------------------------------------- */}
              <p
                className="card-text my-3 p-1"
                onClick={() => {
                  CommentData(true);
                }}
              >
                {" "}
                {props.tweet}
              </p>
            </div>

            {/* Icons */}

            {/*-------------------------------------------------comment icon------------------------------------------------------------------- */}
            <div className="d-flex ">
              <a
                href="javascript:void(0)"
                className="card-link ms-1"
                style={{ textDecoration: "none" }}
                onClick={Togglecomment} // comment toggle
              >
                {" "}
                <ModeCommentOutlinedIcon
                  sx={{ color: "rgb(83, 100, 113)", fontSize: "18px" }}
                />
                {` ${commentState.commentSize}`}
              </a>

              {/*---------------------------------------------------------likes icon-------------------------------------------------------- */}
              <a
                href="javascript:void(0)"
                className="card-link ms-5"
                style={{
                  textDecoration: "none",
                  display: "flex",
                }}
                onClick={() => fetchData()}
              >
                {like.sucess === true ? (
                  <FavoriteIcon sx={LikeStyle} />
                ) : (
                  <FavoriteBorderOutlinedIcon sx={LikeStyle} />
                )}{" "}
                <a
                  style={{
                    color: `${like.sucess === true ? "#FF6666" : ""}`,
                    paddingLeft: "2px",
                  }}
                >{` ${like.totalLikes}`}</a>
              </a>
            </div>

            {/*----------------------------------------------for comment-------------------------------------------------  */}
            {/* ye array ki form me ayya hoga  */}
          </div>
        </div>
      </div>

      <div
        className="Comment m-2"
        style={{
          display: commentState.switch ? "" : "none",
          boxShadow: " 0 0 5px 0 #01000097",
        }}
      >
        <TweetArea
          parentId={tweet_id}
          paddingBottom={"3px"}
          text={"comment.."}
        />

        {commentState.comments.map((value) => (
          <TweetComment
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
    </div>
  );
}
