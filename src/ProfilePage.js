import React, { useEffect } from 'react';

export function ProfilePage(props) {
    const displayName = props.user ? props.user.displayName : null;
    return (
        <h1>{displayName}</h1>
    )
}