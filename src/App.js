import React from 'react';
import './App.css';

import InfiniteScroll from './component/InfiniteScroll';
//import StateChange from './component/StateChange'

function App() {
  return (
    <div className="App">
      <h1> Colors </h1> 
      <InfiniteScroll></InfiniteScroll>
      {/* <StateChange></StateChange> */}
    </div>
  );
}

export default App;
