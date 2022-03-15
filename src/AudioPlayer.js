import React, {useState, useEffect, useRef} from 'react';
import {AudioControls} from './AudioControls';


export function AudioPlayer(props){
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    const [duetProgress, setDuetProgress] = useState(0);
    const [durr, setDurr] = useState(0);
    const [isDuet, setIsDuet] = useState(true);

    const song_arr = findSongs(props.songsArr, props.songid);

    function findSongs(songList, currSong){
        let songArr = [];
    
        

        currSong = songList.filter((song) => {
            return currSong === song.id
        });
    
        songArr.push(currSong[0]); //pushes current song
        let duet_id = currSong[0].duet_from;
    
    
        while(duet_id != 0){ //while there involves a duet
            currSong = songList.filter((song) => {
                return currSong[0].duet_from === song.id;//find the song associated with duet
            });
    
            console.log(currSong);
            duet_id = currSong[0].duet_from;
            songArr.push(currSong[0]); //pushes all other duetted songs
    
        }
        return songArr;
    }
    console.log(song_arr);

    const songsRef = useRef([]);
    const intervalRef = useRef();
    

    const calculateTime = (secs) => { //function taken from https://www.youtube.com/watch?v=sqpg1qzJCGQ&t=2540s
        const minutes = Math.floor(secs/60);
        const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnMinutes} : ${returnSeconds}`
    }

    useEffect(() => { 
        const songs = song_arr.map((song) => {
            return new Audio(song.audio)
        })
        songsRef.current = songs;

        songs[0].addEventListener("loadedmetadata", function(_event) {
            const seconds = Math.floor(songs[0].duration);           
            setDurr(seconds);
        });
    }, [props.songid]);


    useEffect(() => { //some code taken from https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
        if(isPlaying){
            startTimer();
            for(let i = 0; i < songsRef.current.length; i++){
                songsRef.current[i].play()
            }
        }else{
            clearInterval(intervalRef.current);
            for(let i = 0; i < songsRef.current.length; i++){
                songsRef.current[i].pause()
            }
        }

        function cleanup() {
            for(let i = 0; i < songsRef.current.length; i++){
                songsRef.current[i].pause()
            }
        }
        return cleanup;
    }, [isPlaying, props.songid]);


    const startTimer = () =>{
        clearInterval(intervalRef.current);
        console.log(songsRef.current[0].currentTime);
        intervalRef.current = setInterval(() => {
            if(songsRef.current[0].ended){
                if(isDuet){                    
                    for(let i = 1; i < songsRef.current.length; i++){
                        songsRef.current[i].pause();
                        songsRef.current[i].currentTime = 0;
                    }
                }
                setIsPlaying(false);
                songsRef.current[0].currentTime = 0;
            }
            setTrackProgress(songsRef.current[0].currentTime);
        }, [1000]);
    }


    const onScrub = (value) => {
        clearInterval(intervalRef.current);

        if(isDuet){
            for(let i = 1; i < songsRef.current.length; i++){
                songsRef.current[i].currentTime = value;
                setDuetProgress(songsRef.current[i].currentTime);
            }
        }
        songsRef.current[0].currentTime = value;
        setTrackProgress(songsRef.current[0].currentTime);

        startTimer();
    }

    const onScrubEnd = () => {
        if (!isPlaying){
            setIsPlaying(true);
        }
        startTimer();
    }

    return(
        <div className="row audio-control">
            <AudioControls
                isPlaying={isPlaying}
                onPlayPauseClick={setIsPlaying}
            />
            <div className="col progress-div">
                <input
                    type="range"
                    value={trackProgress}
                    min="0"
                    max={durr}
                    className="progress"
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                />
                <div className="row">
                    <div className="col duration">
                        <p>{calculateTime(trackProgress)}</p>
                    </div>
                    <div className="col duration">
                        <p className="text-end">{calculateTime(durr)}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}


