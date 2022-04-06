import React from "react";

import { Grid, Text, Input, Button } from "../elements";

const Login = () => {

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  return (
    <React.Fragment>
      <Grid padding="12px">
        <Text bold size="20px">로그인</Text>

        {/* 여기 들어가는 value의미는 value에 들어온값을 id, pw로 하겠다! */}
        {/* 그렇게되면 여기들어가는 비밀번호는 value로 접근할수 있다! */}
        <Grid margin="20px 0">
          <Input value={id} label="아이디" placeholder="아이디를 입력해주세요."></Input>
        </Grid>
        
        <Grid margin="20px 0">
          <Input value={pw} type="password" label="비밀번호"placeholder="비밀번호를 입력해주세요."></Input>
        </Grid>
        
        {/* 로그인 버튼누르면 쿠키 저장!! */}
        <Button margin="20px 0" _onClick={() => {}}>로그인</Button>  
      </Grid>
    </React.Fragment>
  )
}

export default Login;