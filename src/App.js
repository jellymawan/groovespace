import React, { useState } from 'react'; //import React Component
import * as Static from './StaticPages';
import {CardList} from './CardList.js';
import HeaderNav from './HeaderNav';

function App(props) {
  console.log("hello world");

  return (
    <div>
      <HeaderNav />
      <div>
        <CardList songs={props} />
      </div>
      <div>
        <Static.Footer />
      </div>
    </div>
  );
}

export default App;
