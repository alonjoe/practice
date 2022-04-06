import './App.css';
import React from 'react';
import { Route } from "react-router-dom";

import PostList from '../pages/PostList';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Header from '../components/Header';


function App() {
  return (
    <React.Fragment>
      
      <Header></Header>
      <Route path={"/"} component={PostList} exact />
      <Route path={"/login"} component={Login} exact />
      <Route path={"/signup"} component={SignUp} exact />

    </React.Fragment>
  );
}

export default App;
