import React, { useEffect } from 'react';

export function ProfilePage(props) {

    let results = props.songs.filter((song) => {
        //console.log(props.user.displayName == song.artist);
        return (props.user.displayName == song.artist);
    });

    console.log(results);

    return (
    <h1>{props.user.displayName}</h1>
    )
}
  