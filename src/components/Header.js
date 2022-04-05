import React from "react";
import styled from "styled-components";

import { Button, Grid, Text } from "../elements";

const Header = () => {
  

  return (
    <React.Fragment>
      <Grid is_flex padding="10px 10px">

        <Grid>
          <Text bold size="30px" margin="0px">instagram</Text>
        </Grid>
        
        <Grid is_flex>
          <Button text="로그인"></Button>
          <Button text="회원가입"></Button>
        </Grid>

      </Grid>
    </React.Fragment>
  )
}

export default Header;