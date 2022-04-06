import React from "react";

import { Grid, Input, Text, Button } from "../elements";

const SignUp = () => {

  return (
    <React.Fragment>
      <Grid padding="12px">
        <Text bold size="20px">회원가입</Text>

        <Grid margin="20px 0">
          <Input label="아이디" placeholder="아이디를 입력해주세요."></Input>
        </Grid>
        
        <Grid margin="20px 0">
          <Input label="닉네임" placeholder="닉네임을 입력해주세요."></Input>
        </Grid>
        
        <Grid margin="20px 0">
          <Input type="password" label="비밀번호" placeholder="비밀번호를 입력해주세요."></Input>
        </Grid>
        
        <Grid margin="20px 0">
          <Input type="password" label="비밀번호"placeholder="비밀번호를 확인해주세요."></Input>
        </Grid>
        
        <Button margin="20px 0">회원가입</Button>
      </Grid>
    </React.Fragment>
  )
}

export default SignUp;