import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush} from 'firebase/database';
import UploadForm from './UploadForm';


export function Upload(props) {
    const db = getDatabase();
    const urlParams = useParams();
    const [songsArray, setSongsArray] = useState([]);
    useEffect(() => {   
        const songsRef = ref(db, "songs");

        const offFunction = onValue(songsRef, (snapshot) => {
            const songsObject = snapshot.val();
            const songKeyArray = Object.keys(songsObject);
            const allSongsArray = songKeyArray.map((key) => {
                const whichSong = { ...songsObject[key], firebaseKey: key };
                return whichSong;
            })

            setSongsArray(allSongsArray);
        })

        function cleanup() {
            offFunction();
        }
        return cleanup;
    }, [db])

    const uploadSong = (userObj, newTitle, newDescription, newCover, newAudio) => {
        const songsRef = ref(db, "songs") //I'm not sure if the "songs" key is the correct key, but we'll get that figured out


        const newSong = {
            "id": 131613613663136, //we might wanna do user id instead of song ID? Or add userID on top of song ID? Firebase does generate a song id for us, but I guess we can talk about that later
            "artist": userObj.displayName, //not sure if this is correct
            "title": newTitle,
            "description": newDescription,
            "release_date": Date.now(),
            "cover": newCover,
            "audio": newAudio,
            "likes": 0,
            "duets": 0,
            "duet_from": 0
        }
        firebasePush(songsRef, newSong)
            .then(() => console.log("Pushed"))
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <UploadForm user={props.user} uploadSong={uploadSong} />
        </div>
    );
}
