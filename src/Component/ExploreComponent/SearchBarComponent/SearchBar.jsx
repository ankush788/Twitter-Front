import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchStyles.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function SearchBar(props) {
  const Styling = {
    width: `${props.width}`,
    height: `${props.height}`,
    ...props.Style,
  };
  return (
    <div
      className="d-flex p-0 bd-highlight rounded-pill"
      id="Search"
      style={Styling}
    >
      <button className="rounded-pill">
        <SearchOutlinedIcon
          sx={{ color: "rgb(146, 144, 144)", fontSize: "1rem" }}
        />
      </button>
      <input
        className="rounded-pill"
        type="text"
        placeholder="Search Twitter"
      />
    </div>
  );
}
