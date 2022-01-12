import { Favorite, Message, Share } from "@mui/icons-material";
import React from "react";
import "./VideoSidebar.css";

function VideoSidebar() {
  return (
    <ul className="video-sidebar">
      <li className="sidebutton-wrap">
        <Favorite />
        <p className="sidebutton-count">300</p>
      </li>
      <li className="sidebutton-wrap">
        <Message />
        <p className="sidebutton-count">230</p>
      </li>
      <li className="sidebutton-wrap">
        <Share />
        <p className="sidebutton-count">40</p>
      </li>
    </ul>
  );
}

export default VideoSidebar;
