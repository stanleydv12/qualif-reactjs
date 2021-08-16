import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./SearchPage.css";
import AlbumCard from "../../components/AlbumCard/AlbumCard";

function SearchPage() {

  const [albums, setAlbums] = useState([])
  const [text, setText] = useState("Shawn")

  useEffect(() => {
    fetch(
      `https://spotify-rest.up.railway.app/artist?query=${encodeURI(text)}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data.data.albums);
      });
  }, [text]);

  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search" onChange={e=>setText(e.target.value)}/>
      </div>
      <div className="album-container">
        {albums?.map((album) => {
          return <AlbumCard album={album}  />;
        })}
      </div>
    </div>
  );
}

export default SearchPage;
