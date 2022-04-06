import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";


// 액션 타입 만들기!
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// 액션생성함수 만들기!!
const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));

// 초기값 initialState 만들기!!
const initialState = {
  user: null,          // 유저 이름
  is_login: false,     // 로그인 여부
};


// 리듀서!!!
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;    // payload는 draft사용하면 무조건 들어가는듯
        draft.is_login = true;
      }),
    
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),

    [GET_USER]: (state, action) => produce(state, (draft) => {}),  // 연결하면 이런모양임.
  }
  
);


// 한번에 내보내기!!!
const actionCreators = {
  logIn,
  logOut,
  getUser,
};

export { actionCreators }; // export

