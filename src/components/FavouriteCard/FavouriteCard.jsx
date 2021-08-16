
import React, { useState, useEffect } from 'react'


function FavouriteCard(props){

    const album = props.album

    return(
        <div className="card album-card" key={album.id}>
                  <img className="card-img-top" src={album.image} alt="" />
                  <div className="card-body">
                    <h6 className="card-title">{album.name}</h6>
                  </div>
              </div>
    )
}

export default FavouriteCard 