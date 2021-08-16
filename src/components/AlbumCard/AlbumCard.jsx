import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AlbumCard.css'

function AlbumCard(props){
    const album = props.album
    const name = props.artist
    const url = `/album/${album.id}`

    let o = JSON.parse(localStorage.getItem("favourite-album")??[])
    const [fav, setFav] = useState(o.some(a=>a.id === album.id))

    return(
      <><Link to={`/album/${album.id}`} className="card album-card" key={album.id}>
                  <img className="card-img-top" src={album.image} alt="" />
                  <div className="card-body">
                    <h6 className="card-title">{album.name}</h6>
                    <p className="card-subtitle">{name}</p>
                  </div>
              </Link>
              <div className="card-favourite" onClick={addAlbum(album, fav, setFav)}>{fav?'Favourited':'Favourite'}</div></>
    )
}

function addAlbum(album, fav, setFav){
  return ()=>{
    let o = JSON.parse(localStorage.getItem("favourite-album")??[])
    if(fav){
      localStorage.setItem("favourite-album",JSON.stringify(o.filter(a=>a.id != album.id)))
    }else{
      localStorage.setItem("favourite-album",JSON.stringify([...o,album]))
    }
    setFav(!fav)
  }
}

export default AlbumCard