import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './AlbumPage.css'

function AlbumPage(){
    let {id} = useParams()
    const [tracks, setTracks] = useState([])

    useEffect(()=>{
        fetch(`https://spotify-rest.up.railway.app/album?id=${id}`)
        .then(res=>res.json())
        .then(data =>{
            setTracks(data.data)
        })
    }, [])

    return(
        <div className="container">
            {tracks?.map(track=>{
                return(
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">{track.name}</h6>
                            <audio src={track.preview_url} controls></audio>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AlbumPage