import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  function searchInput(e) {
    navigate("/search");
    props.setSearchValue(e.target.value);
  }
  return (
    <>
      <header>
        <Link to="./">
          <h1 className="logo">IMDb Clone</h1>
        </Link>
        <Link to="/recent">
          <h4 className="menuItem">Recently Viewed</h4>
        </Link>
        <input
          className="searchForm"
          value={props.value}
          onChange={searchInput}
          placeholder="Search movie..."
        />
      </header>
    </>
  );
}

export default Header;
