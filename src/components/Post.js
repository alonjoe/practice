import React from "react";
import {HiOutlineDotsHorizontal} from "react-icons/hi"

import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Grid is_flex padding="11px" width="auto">
            <Image shape="circle"/>
            <Text bold>{props.user_info.user_name}</Text>
          </Grid> 
        </Grid>

        <Grid>
          <Image shape="rectangle" />
        </Grid>

        <Grid padding="5px 15px">
          <Text>{props.contents}</Text>
        </Grid>
        
        <Grid padding="0 15px">
          <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

Post.defaultProps = {
  user_info: {
    user_profile: "https://imgnews.pstatic.net/image/076/2022/04/05/2022040501000313400018701_20220405075004285.jpg?type=w647",
    user_name: "Romero",
  },
  contents: "내용입니다",
  image_url: "https://imgnews.pstatic.net/image/076/2022/04/05/2022040501000313400018701_20220405075004285.jpg?type=w647",
  comment_cnt: 10,
  insert_dt: "2021-02-01 10:00:00",
}

export default Post;