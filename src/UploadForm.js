import { useState } from 'react';

export default function UploadForm(props) {
    const [userTitleInput, setUserTitleInput] = useState("");
    const [userDescInput, setUserDescInput] = useState("");

    const { user } = props;

    const handleClick = (event) => {
        console.log("submitting!");

        props.uploadSong(props.user, userTitleInput, userDescInput, newCover, newAudio);

        setUserTitleInput("");
    }

    const handleTitleChange = (event) => {
        const inputValue = event.target.value
        setUserTitleInput(inputValue);
    }

    const handleDescChange = (event) => {
        const inputValue = event.target.value
        setUserDescInput(inputValue);
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
            <label for="image-file">Your Album Cover (?): </label>
            <input id="image-file" type="file" accept="image/png, image/gif, image/jpeg" />
            <div></div>
            <label for="song-file">Your Song: </label>
            <input id="song-file" type="file" accept="audio/*" />
            {/* We need like 5 text areas and one music file upload, do we need like 5 state variables? And how do we do the music file upload? */}
            <div></div>
            {user &&
                <button className="btn" type="button" onClick={handleClick}>
                    <span>Upload</span>
                </button>}
        </form>
    );
}