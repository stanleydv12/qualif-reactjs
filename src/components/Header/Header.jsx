import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Header.css";

function search(){
    window.location = window.location.href + "search";
}

function favourite(){
  window.location = window.location.href + "favourite";
}

function Header() {

  return (
    <div className="header-container">
      <h1>ShawnPlaylist</h1>
      <input type="button" value="Favourite" onClick={favourite} />
      <input type="button" value="Search" onClick={search} />
    </div>
  );
}



export default Header;
