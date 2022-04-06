import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Button, Grid, Text } from "../elements";

const Header = () => {
  
  const history = useHistory();
  

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