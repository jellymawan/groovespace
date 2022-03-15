import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';


export function ProfilePage(props) {
    const [songs, setSongs] = useState('');
    const displayName = props.user ? props.user.displayName : null;

    let results = props.songs.filter((song) => {
        return (displayName == song.artist);
    });

    let MusicListArray = results.map((song) => {
        let newMusicItem = <MusicList song={song} key={song.id} />
        return newMusicItem;
    })

    return (
        <div>
            <h1 className="profile-name">{displayName}</h1>
            {MusicListArray}
        </div>
    )
}

function MusicList({ song }) {
    return (
        <div className="card browse-card col-md-5">
            <Link to={"/songs/" + song.id} className="link">
                <div className="list col">
                    <div className="browse-img-div">
                        <img src={song.cover} className="img-list align-self-center" alt={song.cover} />
                    </div>
                    <div className="col-8 browse-info">
                        <h1 className="browse-title text-light card-title">{song.title}</h1>
                        <h2 className="browse-artist text-light card-subtitle">{song.artist}</h2>
                        <h3 className="browse-release text-light">{song.release_date}</h3>
                        <h4 className="browse-desc text-light card-text">{song.description}</h4>
                    </div>
                </div>
            </Link>
        </div>

    )

}