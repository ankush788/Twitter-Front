import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Card_text(props) {
  const navigate = useNavigate();
  return (
    <div className="card-text " id="cardText">
      <h5>
        <b>{props.Name}</b>
      </h5>
      <p>{props.Body}</p>
      <p>
        <FontAwesomeIcon icon={faCalendarPlus} />
        {props.Join}
      </p>
      <div className="d-flex ">
        <a
          className="followData "
          style={{ paddingLeft: "0" }}
          onClick={()=>navigate("/Follow")}
        >
          <b>{props.Follower}</b>
        </a>
        <a className="followData" onClick={()=>{navigate("/Follow")}}>
          <b>{props.Following}</b>
        </a>
      </div>
    </div>
  );
}

export default Card_text;
