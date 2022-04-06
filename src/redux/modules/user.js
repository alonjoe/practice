import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { auth } from "../../shared/firebase";

// import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";


// 액션 타입 만들기!
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 액션생성함수 만들기!!
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const setUser = createAction(SET_USER, (user) => ({user}));

// 초기값 initialState 만들기!!
const initialState = {
  user: null,          // 유저 이름
  is_login: false,     // 로그인 여부
};


// 미들웨어!!!
// 로그인!!
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push("/");
  };
};

// 회원가입!! auth 이용
const signupFB = (id, pw, user_name) => {
  return function (dispatch, getState, {history}) {
    auth
      .createUserWithEmailAndPassword(id, pw)
      .then((user) => {

        console.log(user);
        
        auth.currentUser.updateProfile({
          displayName: user_name,
        }).then(()=>{
          dispatch(setUser({user_name: user_name, id: id, user_profile: ''}));
          history.push('/');
        }).catch((error) => {
          console.log(error);
        });

        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });
  }
}


// 리듀서!!!
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // setCookie("is_login", "success");
        draft.user = action.payload.user;    // payload는 draft사용하면 무조건 들어가는듯
        draft.is_login = true;
      }),
    
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),

    [GET_USER]: (state, action) => produce(state, (draft) => {}),  // 연결하면 이런모양임.
  }, initialState
);


// 한번에 내보내기!!!
const actionCreators = {
  logOut,
  getUser,
  loginAction,
  signupFB,
};

export { actionCreators }; // export

