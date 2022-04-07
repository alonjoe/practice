import React from "react";
import { history } from "../redux/ConfigStore";

import { getCookie, deleteCookie } from "../shared/Cookie";
import { Button, Grid, Text } from "../elements";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";

const Header = (props) => {

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.user.is_login);
  
  // const history = useHistory();
  // 로그인 했는지 안했는지 확인! 했을때 안했을떄 상단메뉴 바뀌니까

  // 로그인일때 보여줄 상단
  if (loginState) {

    return (
      <React.Fragment>
        <Grid is_flex padding="10px 10px">

          <Grid>
            <Text bold size="30px" margin="0px">instagram</Text>
          </Grid>
          
          <Grid is_flex>
            <Button text="내정보" _onClick={() => {}}></Button>
            <Button text="알림" _onClick={() => {}}></Button>
            <Button text="로그아웃" _onClick={() => {dispatch(actionCreators.logoutFB())}}></Button>
          </Grid>

        </Grid>
      </React.Fragment>
    )
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