import React, {useState} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';
import _ from 'lodash';
import {AudioPlayer} from './AudioPlayer';

export function Browse(props){
    const songsArr = props.songs;
    const [sortBy, setSortBy] = useState("relevance");
    const [displayedData, setDisplayedData] = useState(songsArr);


    let MusicListArray = displayedData.map((song) => {
        let newMusicItem = <MusicList songsArr={songsArr} song={song} key={song.id}/>
        return newMusicItem;
    })

    const handleSort = (event) => {
        setSortBy(event.target.value);
    }

    const handleClick = () => {
        if(sortBy == 'id'){
            setDisplayedData(_.sortBy(songsArr, sortBy));
        }else{
            setDisplayedData(_.orderBy(songsArr, sortBy, 'desc'));
        }
    }

    return (
        <div>
            <div className="row align-items-center">
                <div className="col-3 sort-by">
                    Sort By:
                </div>
                <div className="col-6 sort-input">
                    <select id="teamSelect" className="form-select" value={sortBy} onChange={handleSort}>
                        <option value="id">Relevance</option>
                        <option value="release_date">Newest</option>
                        <option value="likes">Most Liked</option>
                        <option value="duets">Most Duets</option>
                    </select>
                </div>
                
                <div className="col-2 sort-button">
                    <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Apply</button>
                </div>
            </div>
            <div className="main-browse container-fluid">
                <div className="row med-row">
                {MusicListArray}
                </div>
            </div>
        </div>
        
    )

}

function MusicList({songsArr, song}){
    
    return (

        <div className="card browse-card col-md-5">     
                <Link to={"/songs/"+song.id} className="link">
                    <div className="list col">
                        <div className="browse-img-div">
                            <img src={song.cover} className="img-list align-self-center"alt={song.cover} />
                        </div>
                        <div className="col-8 browse-info">
                            <h1 className="browse-title text-light card-title">{song.title}</h1>
                            <h2 className="browse-artist text-light card-subtitle">{song.artist}</h2>
                            <h3 className="browse-release text-light">{song.release_date}</h3>
                            <h4 className="browse-desc text-light card-text">{song.description}</h4>
                        </div>
                    </div>
               </Link>     
               <AudioPlayer songsArr={songsArr} songid={song.id}/>

        </div>

    )

}
