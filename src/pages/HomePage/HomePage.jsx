import React, { useState, useEffect } from "react";
import "./HomePage.css";
import AlbumCard from "../../components/AlbumCard/AlbumCard";

function HomePage() {
  const [albums, setAlbums] = useState([]);
  const name = "Shawn Mendes";

  useEffect(() => {
    fetch(`https://spotify-rest.up.railway.app/artist?query=${encodeURI(name)}`)
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data.data.albums);
      });
  }, []);

  return (
    <div className="album-container">
      {albums?.map((album) => {
        return (
          <div>
            <AlbumCard album={album} artist={name} />
            
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
