import './App.css';
import React from 'react';
import { Route } from "react-router-dom";

import PostList from '../pages/PostList';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Header from '../components/Header';

// 리덕스랑 같은 history를 사용한다...는 개념..?
import { ConnectRouter } from "connected-react-router";
import { history } from "../redux/ConfigStore";


function App() {
  return (
    <React.Fragment>
      
      <Header></Header>
      <ConnectRouter history={history}>
        <Route path={"/"} component={PostList} exact />
        <Route path={"/login"} component={Login} exact />
        <Route path={"/signup"} component={SignUp} exact />
      </ConnectRouter>
    </React.Fragment>
  );
}

export default App;
