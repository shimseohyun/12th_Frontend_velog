import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PostCard({ postID }) {
  return (
    <PostCardWrapper to={`detail/${postID}`}>
      {postID}번째 포스트
    </PostCardWrapper>
  );
}

export default PostCard;

const PostCardWrapper = styled(Link)`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
