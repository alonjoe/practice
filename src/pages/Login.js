import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { Grid, Text, Input, Button } from "../elements";

import { emailCheck } from "../shared/common";

const Login = () => {

  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  // 공란일 때 나가고, 아니면 실행(디스패치)!!!
  const login = () => {

    if(id === "" || pw === ""){
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    if(!emailCheck(id)){
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    dispatch(userActions.loginFB(id, pw));
  };


  return (
    <React.Fragment>
      <Grid padding="12px">
        <Text bold size="20px">로그인</Text>

        {/* 여기 들어가는 value의미는 value에 들어온값을 id, pw로 하겠다! */}
        {/* 그렇게되면 여기들어가는 비밀번호는 value로 접근할수 있다! */}
        <Grid margin="20px 0">
          <Input value={id} label="아이디" placeholder="아이디를 입력해주세요." _onChange={(e) => {
              setId(e.target.value);
            }}></Input>
        </Grid>
        
        <Grid margin="20px 0">
          <Input value={pw} type="password" label="비밀번호"placeholder="비밀번호를 입력해주세요." _onChange={(e) => {
              setPw(e.target.value);
            }}></Input>
        </Grid>
        
        {/* 로그인 버튼누르면 쿠키 저장!! */}
        <Button margin="20px 0" _onClick={() => {login();}}>로그인</Button>  
      </Grid>
    </React.Fragment>
  )
}

export default Login;