import React, {useState} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player'; //plays music
import {Link, useNavigate} from 'react-router-dom';
import _ from 'lodash';

export function Browse(props){
    const [sortBy, setSortBy] = useState("relevance");
    const [displayedData, setDisplayedData] = useState(props.songs);


    let MusicListArray = displayedData.map((song) => {
        let newMusicItem = <MusicList song={song} key={song.id}/>
        return newMusicItem;
    })

    const handleSort = (event) => {
        setSortBy(event.target.value);
    }

    const handleClick = () => {
        if(sortBy == 'id'){
            setDisplayedData(_.sortBy(props.songs, sortBy));
        }else{
            setDisplayedData(_.orderBy(props.songs, sortBy, 'desc'));
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

function MusicList(props){
    return (

        <div className="card browse-card col-md-5">     
                <Link to={"/songs/"+props.song.id} className="link">
      
                    <div className="list col">
                        <div className="browse-img-div">
                            <img src={props.song.cover} className="img-list align-self-center"alt={props.song.cover} />
                        </div>
                        <div className="col-8 browse-info">
                            <h1 className="browse-title text-light card-title">{props.song.title}</h1>
                            <h2 className="browse-artist text-light card-subtitle">{props.song.artist}</h2>
                            <h3 className="browse-release text-light">{props.song.release_date}</h3>
                            <h4 className="browse-desc text-light card-text">{props.song.description}</h4>
                            <ReactAudioPlayer className="d-none d-lg-inline" src={props.song.audio} controls/>

                        </div>
                    </div>
                    
               </Link>     
        </div>

    )

}
