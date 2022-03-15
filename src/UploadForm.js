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
        const songsRef = ref(db, "songs");

        const currentDate = new Date().toISOString().slice(0,10);
        const newSong = {
            "id": 131613613663136, 
            "artist": userObj.displayName,
            "title": newTitle,
            "description": newDescription,
            "release_date": currentDate,
            "cover": newCover,
            "audio": newAudio,
            "likes": 0,
            "duets": 0,
            "duet_from": 0
        }
        firebasePush(songsRef, newSong)
            .then(() => console.log("Pushed"))
            .then(() => {
                console.log(newSong);
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <UploadForm user={props.user} uploadSong={uploadSong} />
        </div>
    );
}