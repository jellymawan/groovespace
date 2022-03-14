import { useState } from 'react';

export default function UploadForm(props) {
    const [userInput, setUserInput] = useState("");

    const { user } = props;

    const handleClick = (event) => {
        console.log("submitting!");

        props.uploadSong(props.user, newTitle, newDescription, newCover, newAudio);

        setUserInput("");
    }

    const handleChange = (event) => {
        const inputValue = event.target.value
        setUserInput(inputValue);
    }

    return (
        <form>
            {user && <p>Signed in as: {user.displayName}</p>}
            <textarea
                className="form-control" rows="2" placeholder="Title"
                onChange={handleChange}
                value={userInput}
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