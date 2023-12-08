// src/components/AuthIframe.js
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAI6KVr5KDY1HrCkZ71NsPVSH7UkNh6jRQ",
    authDomain: "matsyaweb.firebaseapp.com",
    projectId: "matsyaweb",
    storageBucket: "matsyaweb.appspot.com",
    messagingSenderId: "575345492693",
    appId: "1:575345492693:web:830a9dc542bd646aa7185c",
    measurementId: "G-Z588BM7GWK"
};

firebase.initializeApp(firebaseConfig);

const AuthIframe = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unregisterAuthObserver(); // Make sure to unregister the observer when the component unmounts
    }, []);

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    };

    const handleSignOut = () => {
        firebase.auth().signOut();
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Hello, {user.displayName}!</p>
                    <button onClick={handleSignOut}>Sign out</button>
                    <iframe
                        title="Authorized Content"
                        width="600"
                        height="400"
                        src="https://your-authorized-website.com"
                        frameBorder="0"
                    ></iframe>
                </div>
            ) : (
                <div>
                    <p>Please sign in to access the content.</p>
                    <button onClick={handleSignIn}>Sign in with Google</button>
                </div>
            )}
        </div>
    );
};

export default AuthIframe;
