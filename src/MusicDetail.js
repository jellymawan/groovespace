import React from 'react';
import {useParams} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player'; //plays music
import MUSIC from './data/music-data.json';


export function MusicDetail(props){

    const ID = useParams().songID;

    let song = {};
    let cover="";

    //loops through data to get the song that matches the ID
    for(let i=0; i<props.songs.length; i++){
        if(props.songs[i].id === ID){
            song = props.songs[i];
            cover = props.songs[i].cover;
        }
    }

    
    return(
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src={cover} className="card-img-top img-size" alt={song.title} />
                    </div>
                    <div className="col">
                        <h1>{song.title}</h1>
                        <h2>{song.artist}</h2>
                        <p className="release-date">Release Date: {song.release_date}</p>
                        <p className="description">Description: {song.description}</p>
                        <p className="duration">Duration: {song.duration}</p>

                        <p className="likes"><i className="material-icons like-icon">favorite</i>{song.likes}</p>
                        <p className="duets"><i className="material-icons duet-icon" aria-label="duets">interpreter_mode</i>{song.duets}</p>

                        <ReactAudioPlayer src={song.audio} controls/>

                        <p><a href="#" className="btn btn-dark lg disabled" aria-label="click to add on">Add On</a></p>
                    </div>
                </div>
            </div>
        </main>
    );
}