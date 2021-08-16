import React, { useState, useEffect } from 'react'
import FavouriteCard from '../../components/FavouriteCard/FavouriteCard'
import './FavouritePage.css'

function FavouritePage(){

    const album = JSON.parse(localStorage.getItem("favourite-album"))

    return(
        <div className="album-container">
      {album?.map((album) => {
        return (
          <div>
            <FavouriteCard album={album} />
            
          </div>
        );
      })}
    </div>
    )
}

export default FavouritePage