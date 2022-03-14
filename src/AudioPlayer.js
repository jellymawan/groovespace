import React, {useState, useEffect, useRef} from 'react';
import {AudioControls} from './AudioControls';


export function AudioPlayer(props){
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    const [duetProgress, setDuetProgress] = useState(0);
    const [durr, setDurr] = useState(0);

    const song_arr = findSongs(props.songsArr, props.songid);

    let duetObj = ';'
    let isDuet = true;
    let duetArr = [];

    // const duets = song_arr.map((song) => {
    //     console.log(song.audio);
    // })

    for(let i = 0; i < song_arr.length; i++){
        let song = song_arr[i].audio;
        duetObj = new Audio(song);
        duetArr.push(duetObj);
    }
    

    const duetArrRef = useRef(duetArr);
    const intervalRef = useRef();
    const duration = duetArrRef.current[0];
    
    const calculateTime = (secs) => {
        const minutes = Math.floor(secs/60);
        const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnMinutes} : ${returnSeconds}`
    }

    useEffect(() => {
        duetArr[0].addEventListener("loadedmetadata", function(_event) {
            const seconds = Math.floor(duetArr[0].duration);           
            setDurr(seconds);
        });

        if(isPlaying){
            duetArrRef.current[0].play();
            startTimer();
            if(isDuet){
                for(let i = 1; i < duetArrRef.current.length; i++){
                    duetArrRef.current[i].play()
                }
            }
        }else{
            clearInterval(intervalRef.current);
            duetArrRef.current[0].pause();
            if(isDuet){
                for(let i = 1; i < duetArrRef.current.length; i++){
                    duetArrRef.current[i].pause()
                }
            }
        }


        function cleanup() {
            duetArrRef.current[0].pause();
            duetArrRef.current[0].currentTime = 0;
            for(let i = 1; i < duetArrRef.current.length; i++){
                duetArrRef.current[i].pause()
                duetArrRef.current[i].currentTime = 0;
            }
        }
        return cleanup;
    }, [isPlaying, props.songid]);

    const startTimer = () =>{
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if(duetArrRef.current[0].ended){
                if(isDuet){                    
                    for(let i = 1; i < duetArrRef.current.length; i++){
                        duetArrRef.current[i].pause();
                        duetArrRef.current[i].currentTime = 0;
                    }
                }
                setIsPlaying(false);
                duetArrRef.current[0].currentTime = 0;
                setTrackProgress(duetArrRef.current[0].currentTime);
                
            }
            else{
                setTrackProgress(duetArrRef.current[0].currentTime);
            }
        }, [1000]);
    }


    const onScrub = (value) => {
        clearInterval(intervalRef.current);
        
        if(isDuet){
            for(let i = 1; i < duetArrRef.current.length; i++){
                duetArrRef.current[i].currentTime = value;
                setDuetProgress(duetArrRef.current[i].currentTime);
            }
        }
        duetArrRef.current[0].currentTime = value;
        setTrackProgress(duetArrRef.current[0].currentTime);

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


function findSongs(songList, currSong){
    let songArr = [];

    currSong = songList.filter((song) => {
        return currSong === song.id
    });

    songArr.push(currSong[0]); //pushes current song
    let duet_id = currSong[0].duet_from;

    while(duet_id != 0){
        currSong = songList.filter((song) => {
            return currSong[0].duet_from === song.id
        });

        duet_id = currSong[0].duet_from;
        songArr.push(currSong[0]); //pushes all other duetted songs
        
    }
    return songArr;
}
