import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { AudioPlayer } from './AudioPlayer';
import musicData from './data/music-data.json';


export function Browse(props) {

    console.log(props.songs);

    const songsArr = props.songs;
    const [sortBy, setSortBy] = useState("relevance");
    const [displayedData, setDisplayedData] = useState(songsArr);

    console.log(displayedData);

    let MusicListArray = displayedData.map((song) => {
        let newMusicItem = <MusicList songsArr={songsArr} song={song} key={song.id} />
        return newMusicItem;
    })


    let temp = MusicListArray[0].props.songsArr.map((song) => {
        let newMusicItem = <MusicList songsArr={songsArr} song={song} key={song.id} />
        return newMusicItem;
    })


    const handleSort = (event) => {
        setSortBy(event.target.value);
    }

    const handleClick = () => {
        if (sortBy == 'id') {
            setDisplayedData(_.sortBy(songsArr, sortBy));
        } else {
            setDisplayedData(_.orderBy(songsArr, sortBy, 'desc'));
        }
    }

    return (
        <div>
            {/* <Search songs={displayedData} callBack={props.callBack} data={setDisplayedData} /> */}
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
                    {temp}
                </div>
            </div>
        </div>

    )

}

function MusicList({ songsArr, song }) {

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
            {/* <AudioPlayer songsArr={songsArr} songid={song.id}/> */}

        </div>

    )

}

export function Search(props) {
    const [query, setQuery] = useState("");
    const handleChange = (event) => {
        setQuery(event.target.value);
        // resets data to original data 
        props.data(musicData);
        props.callBack(musicData);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const filteredArr = props.songs.filter((song) => {
            if (query === "") {
                return song;
            } else if (song.title.toLowerCase().includes(query.toLowerCase()) ||
                song.artist.toLowerCase().includes(query.toLowerCase())) {
                return song;
            }
        });
        props.data(filteredArr);
        props.callBack(filteredArr);
    }
    return (
        <form className="d-flex m-auto" id="search-form" onSubmit={handleSubmit}>
            <label hidden htmlFor="search">Search</label>
            <input className="form-control me-2" type="search"
                placeholder="Search user/song/artist"
                aria-label="Search for user, song, artist"
                id="search" onChange={handleChange} />
            <button className="btn btn-outline-secondary" type="submit" >SEARCH</button>
        </form>
    );
}