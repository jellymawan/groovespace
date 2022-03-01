import React, { useState } from 'react'; //import React Component
import * as Static from './StaticPages';
import {CardList} from './CardList.js';
import HeaderNav from './HeaderNav';
import MusicPage from './MusicPage';
import {MusicDetail} from './MusicDetail';
import {Link, Routes, Route, Outlet, NavLink} from 'react-router-dom';
 
 
 
function App(props) {
 return (
   <div>
     <HeaderNav />
     <div>
       <Routes>
           
           <Route path="/songs" element={<MusicPage />}>
             <Route path=":songID" element={<MusicDetail songs={props.songs}/>} />
             <Route index="/songs" element={<CardList songs={props.songs}/>} />
           </Route>
           <Route path="/about" element={<Static.AboutPage />}/>
           <Route path="*" element={<Static.ErrorPage />} />
           <Route path="/" element={<CardList songs={props.songs}/>}/>

         </Routes>
     </div>
     <div>
       <Static.Footer />
     </div>
   </div>
 );
} 

export default App;
