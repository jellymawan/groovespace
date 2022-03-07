import React from 'react';
import {useParams} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player'; //plays music
import {FcLike} from 'react-icons/fc';
import {MdGroupAdd} from 'react-icons/md';
import {useState} from 'react';
import {IconButton} from '@mui/material';


export function MusicDetail(props){

    const ID = useParams().songID;

    let song = {};

    //loops through data to get the song that matches the ID
    for(let i=0; i<props.songs.length; i++){
        if(props.songs[i].id+"" === ID){
            song = props.songs[i];
        }
    }

    
    return(
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src={song.cover} className="card-img-top img-size" alt={song.title} />
                    </div>
                    <div className="col">
                        <h1>{song.title}</h1>
                        <h2>{song.artist}</h2>
                        <p className="release-date">Release Date: {song.release_date}</p>
                        <p className="description">Description: {song.description}</p>
                        <p className="duration">Duration: {song.duration}</p>

                        {<Likes numLikes={song}/>} 
                        {<Duets numDuets={song}/>}

                        <ReactAudioPlayer src={song.audio} controls/>

                        <p><a href="#" className="btn btn-dark lg disabled" aria-label="click to add on">Add On</a></p>
                    </div>
                </div>
            </div>
        </main>
    );
}

function Likes(props){
    let numLikes = props.numLikes.likes;
    const [likes, setLikes] = useState(numLikes);

    const handleLike = (event) => {
        setLikes(likes => likes + 1);
    }
    return(
        <div className="icon">
        <IconButton onClick={handleLike}>
            <p className="likes"><FcLike className="material-icons like-icon"/></p>
        </IconButton>
        {likes}
        </div>
    )
}

function Duets(props){
    let numDuets = props.numDuets.duets;
    const [duets, setDuets] = useState(numDuets);

    const handleLike = (event) => {
        setDuets(duets => duets + 1);
    }
    return(
        <div className="icon">
        <IconButton onClick={handleLike}>
            <p className="duets"><MdGroupAdd className="material-icons duet-icon"/></p>
        </IconButton>
        {duets}
        </div>
    )
}