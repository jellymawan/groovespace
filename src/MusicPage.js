import React from 'react';
import {Outlet} from 'react-router-dom'
export default function MusicPage(props) {//each music page
  return (
    <div>
      <Outlet />
    </div>    
  )
}
