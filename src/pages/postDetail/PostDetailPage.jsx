import React from "react";
import { useParams } from "react-router-dom";

function PostDetailPage() {
  const postID = useParams().postID;
  return <div>{postID}번째 포스트</div>;
}

export default PostDetailPage;
