import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';


export function Upload(props) {
    const db = getDatabase();
    const urlParams = useParams();

    useEffect(() => {
        const songsRef = ref(db, "songs");

        onValue(songsRef, (snapshot) => {
            const newValue = snapshot.val();
        });
    }, []);

    const uploadSong = (userObj, newTitle, newDescription, newCover, newAudio) => {
        const songsRef = ref(db, "songs") //I'm not sure if the "songs" key is the correct key, but we'll get that figured out


        const newSong = {
            "id": 131613613663136, //we might wanna do user id instead of song ID? Or add userID on top of song ID? Firebase does generate a song id for us, but I guess we can talk about that later
            "artist": userObj.uid, //not sure if this is correct
            "title": newTitle,
            "description": newDescription,
            "release_date": Date.now(),
            "cover": newCover,
            "audio": newAudio,
            "likes": 0,
            "duets": 0,
            "duet_from": 0
        }
        firebaseSet(songsRef, newSong);
    }
    return (
        <div>
            {/* Need to create a form that has uploadSong as the onClick */}
        </div>
    );
}
