import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function UploadForm(props) {
    const [userTitleInput, setUserTitleInput] = useState("");
    const [userDescInput, setUserDescInput] = useState("");

    const { user } = props;

    const handleClick = (event) => {
        const storage = getStorage();
        const newImageRef = ref(storage, "covers/" + userTitleInput + ".png");
        uploadBytes(newImageRef, imageFile)
            .then(() => {
                return getDownloadURL(newImageRef);
            })
            .then((url) => {
                console.log(url);
                props.uploadSong(props.user, userTitleInput, userDescInput, url, "audio placeholder");
            })

        setUserTitleInput("");
        setUserDescInput("");
    }

    const handleTitleChange = (event) => {
        const inputValue = event.target.value
        setUserTitleInput(inputValue);
    }

    const handleDescChange = (event) => {
        const inputValue = event.target.value
        setUserDescInput(inputValue);
    }

    const [imageFile, setImageFile] = useState(undefined)
    let initialURL = '/imgs/cover/Digital album cover.jpeg'

    const [imagePreviewUrl, setImagePreviewUrl] = useState(initialURL)

    const handleImageChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            setImageFile(imageFile);
            setImagePreviewUrl(URL.createObjectURL(imageFile));
        }
    }

    const imgURL = null;
    const handleImageUpload = async (event) => {
        console.log("Uploading", imageFile);

        const storage = getStorage();
        const newImageRef = ref(storage, "covers/" + userTitleInput + ".png")
        await uploadBytes(newImageRef, imageFile)
        const imgURL = await getDownloadURL(newImageRef)
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
            <input id="song-file" type="file" className="d-none" accept="audio/*" />
            <div></div>
            {user &&
                <button className="btn btn-primary" type="button" onClick={handleClick}>
                    <span>Upload</span>
                </button>}
        </form>
    );
}