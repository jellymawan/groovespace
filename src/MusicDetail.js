import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {FcLike} from 'react-icons/fc';
import {MdGroupAdd} from 'react-icons/md';
import {useState} from 'react';
import {IconButton} from '@mui/material';
import {AudioPlayer} from './AudioPlayer'



export function MusicDetail(props){

    const songsArr = props.songs;

    const ID = useParams().songID;

    let song = {};

    //loops through data to get the song that matches the ID
    for(let i=0; i<songsArr.length; i++){
        if(songsArr[i].id+"" === ID){
            song = songsArr[i];
        }
    }
    
    const is_duet = song.duet_from != 0

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

                        {is_duet ? 
                            (<p className="duet-from">Duetted from: {<GetDuet currSong={song} songsArr={songsArr}/>}</p>)
                            : (<p></p>)}

                        {<Likes numLikes={song}/>} 
                        {<Duets numDuets={song}/>}
                        <div className="row">
                            <AudioPlayer songsArr={songsArr} songid={song.id}/>

                        </div>

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
    };
    return(
        <div className="icon">
        <IconButton onClick={handleLike} className="likes">
            <p className="likes"><FcLike className="material-icons like-icon"/></p>
        </IconButton>
        {likes}
        </div>
    );
}

function Duets(props){
    let numDuets = props.numDuets.duets;
    const [duets, setDuets] = useState(numDuets);

    return(
        <div className="icon">
            <MdGroupAdd className="material-icons duet-icon"/>
            {duets}
        </div>
    );
}

function GetDuet({currSong, songsArr}){

    const duet_song = songsArr.filter((song) => {
        return currSong.duet_from === song.id;
    })

    return(
        <Link to={"/songs/"+duet_song[0].id} className="duet-from-link">
            {duet_song[0].title}
        </Link>
    )

}