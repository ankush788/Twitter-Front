import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

//--------------------------------------import ------------------------------//
function Profile_heading(props) {
  //-----------------------tweet state  data --------------------------//
  const [Tweets, setTweet] = useState(0);
  async function TweetData() {
    try {
      const response = await axios.post(
        "https://twitter-backend-sooty.vercel.app/data/UserTweet",
        { name: props.name },
        { withCredentials: true }
      );
      console.log(response);
      setTweet(response.data.size);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    TweetData();
  }, []);
  //---------------------------------return code -----------------------------//
  return (
    <div className="" id="ProfileHeading">
      <div className=" d-flex " id="top-heading">
        <div className="text d-flex">
          <b className="pt-3">{props.name}</b>
        </div>
      </div>

      <p className="text">
        {" "}
        <b> {`${Tweets} ${" "} Tweets`}</b>
      </p>
    </div>
  );
}

export default Profile_heading;
