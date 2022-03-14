import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';


const FIREBASEUI_CONFIG = {
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
};

export function SignInPage(props) {
    const auth = getAuth();

    return (
        !props.user &&
            <StyledFirebaseAuth uiConfig={FIREBASEUI_CONFIG} firebaseAuth={auth} />

    )
}
