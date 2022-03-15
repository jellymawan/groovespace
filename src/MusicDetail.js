import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { MdGroupAdd } from 'react-icons/md';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { AudioPlayer } from './AudioPlayer'
import {Upload} from './Upload';


export function MusicDetail(props) {

    const songsArr = props.songs;

    const ID = useParams().songID;

    let song = {};

    //loops through data to get the song that matches the ID
    for (let i = 0; i < songsArr.length; i++) {
        if (songsArr[i].id + "" === ID) {
            song = songsArr[i];
        }
    }

    const is_duet = song.duet_from != 0

    return (
        <main>
            <div className="container-fluid">
                <div className="col music-detail-page">
                    <div className="col music-detail-img">
                        <img src={song.cover} className="card-img-top img-size" alt={song.title} />
                    </div>
                    <div className="col">
                        <h1>{song.title}</h1>
                        <h2>{song.artist}</h2>
                        <p className="release-date">Release Date: {song.release_date}</p>
                        <p className="description">Description: {song.description}</p>

                        {is_duet ?
                            (<p className="duet-from">Duetted from: {<GetDuet currSong={song} songsArr={songsArr} />}</p>)
                            : (<p></p>)}

                        {<Likes numLikes={song.likes} />}
                        {<Duets numDuets={song.duets} />}
                        <div className="row">
                            <AudioPlayer songsArr={songsArr} songid={song.id} />

                        </div>

                        {/* <p><a href="#" className="btn btn-dark lg" aria-label="click to add on">Add On</a></p> */}
                        <Link to="/upload" element={<Upload songid={song.id}/>} className="btn btn-dark lg">Add on</Link>
                        {/* For some reason, not passing in the songid prop to the Upload component */}

                    </div>
                </div>
            </div>
        </main>
    );
}

function Likes({ numLikes }) {
    const [likes, setLikes] = useState(numLikes);

    const handleLike = (event) => {
        setLikes(likes => likes + 1);
    };
    return (
        <div className="icon">
            <IconButton onClick={handleLike} className="likes">
                <p className="likes"><FcLike className="material-icons like-icon" /></p>
            </IconButton>
            {likes}
        </div>
    );
}

function Duets({ numDuets }) {
    const [duets, setDuets] = useState(numDuets);

    return (
        <div className="icon">
            <MdGroupAdd className="material-icons duet-icon" />
            {duets}
        </div>
    );
}

function GetDuet({ currSong, songsArr }) {

    const duet_song = songsArr.filter((song) => {
        return currSong.duet_from === song.id;
    })

    return (
        <Link to={"/songs/" + duet_song[0].id} className="duet-from-link">
            {duet_song[0].title}
        </Link>
    )

}