import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { Grid, Input, Text, Button } from "../elements";

const SignUp = () => {

  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [pw_check, setPwCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const signup = (props) => {
    if (id === "" || pw === "" || user_name === "") {
      return;
    }
    
    if (pw !== pw_check) {
      return;
    }

    dispatch(userActions.signupFB(id, pw, user_name));
  };

  return (
    <React.Fragment>
      <Grid padding="12px">
        <Text bold size="20px">회원가입</Text>

        <Grid margin="20px 0">
          <Input label="아이디" placeholder="아이디를 입력해주세요." _onChange={(e) => {
              setId(e.target.value);
            }}></Input>
        </Grid>
        
        <Grid margin="20px 0">
          <Input label="닉네임" placeholder="닉네임을 입력해주세요." _onChange={(e) => {
              setUserName(e.target.value);
            }}></Input>
        </Grid>
        
        <Grid margin="20px 0">
          <Input type="password" label="비밀번호" placeholder="비밀번호를 입력해주세요." _onChange={(e) => {
              setPw(e.target.value);
            }}></Input>
        </Grid>
        
        <Grid margin="20px 0">
          <Input type="password" label="비밀번호"placeholder="비밀번호를 확인해주세요." _onChange={(e) => {
              setPwCheck(e.target.value);
            }}></Input>
        </Grid>
        
        <Button margin="20px 0" _onClick={signup}>회원가입</Button>
      </Grid>
    </React.Fragment>
  )
}

SignUp.defaultProps = {};

export default SignUp;