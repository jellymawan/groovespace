import React, { useEffect, useState } from 'react'; //import React Component
import * as Static from './StaticPages';
import { CardList } from './CardList.js';
import HeaderNav from './HeaderNav';
import MusicPage from './MusicPage';
import { MusicDetail } from './MusicDetail';
import { SignInPage } from './SignInPage';
import { Link, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Browse } from './Browse';
import { MdOpenInNewOff, MdSettingsInputComponent } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import {Upload} from './Upload';
import {getDatabase, ref, onValue} from 'firebase/database';



function App(props) {
  const [user, loading, error] = useAuthState(getAuth());
  

  const currentUser = user;


  const [search, setSearch] = useState(props.songs);
  const [data, setData] = useState("");
  useEffect(() => {
    const db = getDatabase();
    const songsRef = ref(db, 'songs');
    const songs = onValue(songsRef, (snapshot) => {
      const database = snapshot.val();
      const keys = Object.keys(database);
      const songArray = keys.map((key) => {
        const singleKey = {...database[key]}
        return singleKey
    })
    setData(songArray);  
    setSearch(songArray);  
    function cleanup(){
      songs();
    }
    return cleanup;
    });

  },[])

  // state variable to update data based on user input
  //const [search, setSearch] = useState(props.songs);
  return (
    <div>
      <HeaderNav />
      <div>
        <Routes>
          <Route path="/" element={<CardList songs={search} />} />
          <Route path="/songs" element={<MusicPage />}>
            {/* <Route path=":songID" element={<MusicDetail songs={props.songs} />} /> */}
            <Route path=":songID" element={<MusicDetail songs={search} />} />
            <Route index="/songs" element={<CardList songs={search} />} />
          </Route>
          <Route path="/browse" element={<Browse songs={search} data={data} callBack={setSearch} />} />
          <Route path="/about" element={<Static.AboutPage />} />
          <Route path="/upload" element={<Upload user={currentUser} />} />
          <Route path="/signin" element={<SignInPage user={currentUser} loginFunction={user} />} />
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

function ProtectedPage(props) {
  if (props.loading) {
    return null;
  }
  else if (!props.user) {
    return <Navigate to="/signin" />
  }
  else {
    return <Outlet />
  }
}