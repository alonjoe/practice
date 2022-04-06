import React from "react";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";
import { history } from "../redux/ConfigStore";

import { Button, Grid, Text } from "../elements";

const Header = () => {
  
  // const history = useHistory();
  // 로그인 했는지 안했는지 확인! 했을때 안했을떄 상단메뉴 바뀌니까
  const [is_login, setIsLogin] = React.useState(false);


  // 로그인일때 보여줄 상단
  if (is_login) {
    <React.Fragment>
      <Grid is_flex padding="10px 10px">

        <Grid>
          <Text bold size="30px" margin="0px">instagram</Text>
        </Grid>
        
        <Grid is_flex>
          <Button text="내정보" _onClick={() => {}}></Button>
          <Button text="알림" _onClick={() => {}}></Button>
          <Button text="로그아웃" _onClick={() => {}}></Button>
        </Grid>

      </Grid>
    </React.Fragment>
  }

  // 로그인 안했을때 보여줄 상단
  return (
    <React.Fragment>
      <Grid is_flex padding="10px 10px">

        <Grid>
          <Text bold size="30px" margin="0px">instagram</Text>
        </Grid>
        
        <Grid is_flex>
          <Button text="로그인" _onClick={() => {history.push("/login")}}></Button>
          <Button text="회원가입" _onClick={() => {history.push("/signup")}}></Button>
        </Grid>

      </Grid>
    </React.Fragment>
  )
}

export default Header;