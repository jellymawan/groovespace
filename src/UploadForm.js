import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function UploadForm(props) {
    const [userTitleInput, setUserTitleInput] = useState("");
    const [userDescInput, setUserDescInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { user } = props;

    const handleClick = async (event) => {
        setIsLoading(true);
        const storage = getStorage();
        const newImageRef = ref(storage, "covers/" + userTitleInput + ".png");
        const newSongRef = ref(storage, "songs/" + userTitleInput + ".mp4");


        await uploadBytes(newImageRef, imageFile)
        const imgURL = await getDownloadURL(newImageRef);
        await uploadBytes(newSongRef, songFile)
        const songURL = await getDownloadURL(newSongRef);

        props.uploadSong(props.user, userTitleInput, userDescInput, imgURL, songURL);
        setUserTitleInput("");
        setUserDescInput("");
        setIsLoading(false);
    }

    const handleTitleChange = (event) => {
        const inputValue = event.target.value
        setUserTitleInput(inputValue);
    }

    const handleDescChange = (event) => {
        const inputValue = event.target.value
        setUserDescInput(inputValue);
    }

    const [imageFile, setImageFile] = useState(undefined);
    const [songFile, setSongFile] = useState(undefined);

    const [imagePreviewUrl, setImagePreviewUrl] = useState(null)

    const handleImageChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            setImageFile(imageFile);
            setImagePreviewUrl(URL.createObjectURL(imageFile));
        }
    }

    const handleSongChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const songFile = event.target.files[0]
            setSongFile(songFile);
        }
    }

    return (
        <form>
            {user && <p>Signed in as: {user.displayName}</p>}
            <textarea
                className="form-control" rows="2" placeholder="Title"
                onChange={handleTitleChange}
                value={userTitleInput}
                disabled={!user}
            />
            <textarea
                className="form-control" rows="2" placeholder="Description"
                onChange={handleDescChange}
                value={userDescInput}
                disabled={!user}
            />
            <div></div>
            <img src={imagePreviewUrl}></img>
            <label htmlFor="image-file" className="btn btn-secondary">Choose Cover Image</label>
            <input id="image-file" type="file" className="d-none" accept="image/png, image/gif, image/jpeg" onChange={handleImageChange} />
            <div></div>
            <label htmlFor="song-file" className="btn btn-success">Choose Song</label>
            <input id="song-file" type="file" accept="audio/*" onChange={handleSongChange} />
            <div></div>
            {isLoading && <i className="fas fa-circle-notch fa-spin"></i>}
            {user &&

                <button className="btn btn-primary" type="button" onClick={handleClick}>
                    <span>Upload</span>
                </button>}
        </form>
    );
}