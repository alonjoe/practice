import React from "react";

import { Grid, Text, Input, Button } from "../elements";

const Login = () => {

  return (
    <React.Fragment>
      <Grid padding="12px">
        <Text bold size="20px">로그인</Text>

        <Grid margin="20px 0">
          <Input label="아이디" placeholder="아이디를 입력해주세요."></Input>
        </Grid>
        
        <Grid margin="20px 0">
          <Input type="password" label="비밀번호"placeholder="비밀번호를 입력해주세요."></Input>
        </Grid>
        
        <Button margin="20px 0">로그인</Button>
      </Grid>
    </React.Fragment>
  )
}

export default Login;