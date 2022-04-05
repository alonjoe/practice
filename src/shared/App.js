import './App.css';
import React from 'react';
import { Route } from "react-router-dom";

import PostList from '../pages/PostList';


function App() {
  return (
    <React.Fragment>
      
      <Route path={"/"} component={PostList} exact />

    </React.Fragment>
  );
}

export default App;
