import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { Button, Grid, ThemeProvider, createTheme, Typography } from '@mui/material';
import IframeDisplay from './IframeDisplay'; // Adjust the path according to your file structure

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI6KVr5KDY1HrCkZ71NsPVSH7UkNh6jRQ",
    authDomain: "matsyaweb.firebaseapp.com",
    projectId: "matsyaweb",
    storageBucket: "matsyaweb.appspot.com",
    messagingSenderId: "575345492693",
    appId: "1:575345492693:web:830a9dc542bd646aa7185c",
    measurementId: "G-Z588BM7GWK"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

// Define a theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#61dafb',
        },
        secondary: {
            main: '#b5ecfb',
        },
    },
});

const glassStyle = {
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
    backdropFilter: 'blur(5px)', // Blur effect
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow
    border: '1px solid rgba(255, 255, 255, 0.3)', // Light border
    borderRadius: '10px', // Rounded corners
    color: '#fff', // Text color
};

const AuthIframe = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unregisterAuthObserver();
    }, []);

    const handleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={glassStyle}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Matsya Capital Options Trade Tool
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {user ? (
                            <>
                                <Button variant="contained" color="primary" onClick={handleSignOut}>
                                    Sign Out
                                </Button>
                                <IframeDisplay /> {/* Displaying the iframe after successful login */}
                            </>
                        ) : (
                            <Button variant="contained" color="secondary" onClick={handleSignIn}>
                                <GoogleButton />
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
};

export default AuthIframe;
