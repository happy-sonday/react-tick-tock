import { Favorite, Message, Share, FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";
import "./VideoSidebar.css";

function VideoSidebar(props) {
  const [Liked, setLiked] = useState(false);
  const [LikeCount, setLikeCount] = useState(parseInt(props.likeCount));

  const onLiked = (e) => {
    if (Liked) {
      setLiked(false);
      setLikeCount(LikeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(LikeCount + 1);
    }
  };
  return (
    <ul className="video-sidebar">
      <li className="sidebutton-wrap" onClick={onLiked}>
        {Liked ? <Favorite /> : <FavoriteBorder />}
        <p className="sidebutton-count">{LikeCount}</p>
      </li>
      <li className="sidebutton-wrap">
        <Message />
        <p className="sidebutton-count">{props.messageCount}</p>
      </li>
      <li className="sidebutton-wrap">
        <Share />
        <p className="sidebutton-count">{props.shareCount}</p>
      </li>
    </ul>
  );
}

export default VideoSidebar;
