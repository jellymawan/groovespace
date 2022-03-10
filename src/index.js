import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import musicData from './data/music-data.json';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    //Need the console stuff here
}
const app = initializeApp(firebaseConfig);


ReactDOM.render(
    <BrowserRouter>
        <App songs={musicData}/>
    </BrowserRouter>,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
