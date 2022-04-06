import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { createBrowserHistory } from "history";               
import { connectRouter } from "connected-react-router";

import User from "./modules/user";

// 스토어에 히스토리 주입하기
export const history = createBrowserHistory();

// 1. rootReducer 만들고(리듀서 모음)
const rootReducer = combineReducers({
  user: User,
  router: connectRouter(history),
});

// 2. 미들웨어 만들기
// const middlewares = [thunk]; 5. 스토어에 히스토리 주입하기
const middlewares = [thunk.withExtraArgument({history: history})];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// 크롬 확장프로그램, redux devTools 사용 설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;



// 3. 미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// 4. 스토어만들기
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();

