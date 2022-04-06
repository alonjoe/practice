import React from "react";

import { setCookie } from "../shared/Cookie";
import { Grid, Text, Input, Button } from "../elements";

const Login = () => {

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  // input에 들어온 아이디 저장
  const changeId = (e) => {
    setId(e.target.value);
  }

  // input에 들어온 비밀번호 저장
  const changePw = (e) => {
    setPw(e.target.value);
  }

  const login = () => {
    setCookie("user_id", id, 3); // !!(함수명, 저장할값, 만료일(유효3일))!!
    setCookie("user_pw", pw, 3);
  }

  return (
    <React.Fragment>
      <Grid padding="12px">
        <Text bold size="20px">로그인</Text>

        {/* 여기 들어가는 value의미는 value에 들어온값을 id, pw로 하겠다! */}
        {/* 그렇게되면 여기들어가는 비밀번호는 value로 접근할수 있다! */}
        <Grid margin="20px 0">
          <Input value={id} onChange={changeId} label="아이디" placeholder="아이디를 입력해주세요."></Input>
        </Grid>
        
        <Grid margin="20px 0">
          <Input value={pw} onChange={changePw} type="password" label="비밀번호"placeholder="비밀번호를 입력해주세요."></Input>
        </Grid>
        
        {/* 로그인 버튼누르면 쿠키 저장!! */}
        <Button margin="20px 0" _onClick={() => {login();}}>로그인</Button>  
      </Grid>
    </React.Fragment>
  )
}

export default Login;