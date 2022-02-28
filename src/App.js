import React, { useState } from 'react'; //import React Component
import * as Static from './StaticPages';
import {CardList} from './CardList.js';
import HeaderNav from './HeaderNav';
import MusicPage from './MusicPage';
import {MusicDetail} from './MusicDetail';
import {Link, Routes, Route} from 'react-router-dom';



function App(props) {
  return (
    <div>
      <HeaderNav />
      <div>
        <Routes>
            <Route path="/home" element={<MusicPage />}>
              <Route path=":songID" element={<MusicDetail songs={props.songs}/>} />
              <Route index="/home" element={<CardList songs={props.songs}/>} />
            </Route>
            <Route path="/about" element={<Static.AboutPage />}/>
            <Route path="*" element={<Static.ErrorPage />} />
          </Routes>
      </div>
      <div>
        <Static.Footer />
      </div>
    </div>
  );
}


export default App;
