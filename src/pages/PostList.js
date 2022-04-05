import React from "react";

import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PostList = () => {

  return (
    <React.Fragment>
      <Header></Header>
      <Post></Post>
      {/* <Footer></Footer> */}
    </React.Fragment>
  )
}

export default PostList;