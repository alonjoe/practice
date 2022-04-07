import './App.css';
import React from 'react';
import { Route } from "react-router-dom";

import { Grid, Button } from "../elements";
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Header from '../components/Header';
import Permit from './Permit';

// 리덕스랑 같은 history를 사용한다...는 개념..?
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/ConfigStore";
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from "../redux/modules/user";


import { apiKey } from "./firebase";

function App() {

  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  })

  return (
    <React.Fragment>
      
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path={"/"} component={PostList} exact />
        <Route path={"/login"} component={Login} exact />
        <Route path={"/signup"} component={SignUp} exact />
      </ConnectedRouter>
      <Permit>
        <Button is_float text="+"></Button>
      </Permit>
    </React.Fragment>
  );
}

export default App;
