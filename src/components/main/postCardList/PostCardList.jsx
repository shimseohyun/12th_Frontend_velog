import React from "react";
import PostCard from "../postCard/PostCard";
import styled from "styled-components";

function PostCardList() {
  return (
    <PostCardListWrapper>
      <PostCard postID={1} />
      <PostCard postID={2} />
      <PostCard postID={3} />
      <PostCard postID={4} />
      <PostCard postID={5} />
    </PostCardListWrapper>
  );
}

export default PostCardList;

const PostCardListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
`;
