import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import musicData from './data/music-data.json';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPsDEVHv496GFVL5BF6pyUuiF0l9Dx5SU",
  authDomain: "project-eyoo30.firebaseapp.com",
  projectId: "project-eyoo30",
  storageBucket: "project-eyoo30.appspot.com",
  messagingSenderId: "652977828009",
  appId: "1:652977828009:web:2768bcc5322ace68acf9b8"
};

// initialize firebase
const app = initializeApp(firebaseConfig);


ReactDOM.render(
    <BrowserRouter>
        <App songs={musicData}/>
    </BrowserRouter>,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
