import React from "react";
import Tabbar from "../../components/common/tabbar/Tabbar";
import PostCardList from "../../components/main/postCardList/PostCardList";

function HomePage() {
  return (
    <>
      <Tabbar />
      <PostCardList />
    </>
  );
}

export default HomePage;
