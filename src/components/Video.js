import React, { useRef, useState, useEffect } from "react";
import MuteIcon from "./MuteIcon";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const videoRef = useRef(null);

  const [Muted, setMuted] = useState(true);

  const onMuted = (params) => {
    setMuted(!Muted);

    // if (videoRef.current.muted) {
    //   setMuted(false);
    // } else {
    //   setMuted(true);
    // }
  };
  const onDisplayButton = (params) => {};

  return (
    <div className="video">
      <video
        src="https://v16-webapp.tiktok.com/9653fade6c4a628f354befe1afb0f9e7/61de8292/video/tos/alisg/tos-alisg-pve-0037/b66eb9c787cd482796dd78e1fe5439d3/?a=1988&br=1804&bt=902&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=Yu12_FBrkag3-I&l=202201120124430102440750670F86FA84&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3JqZGU6ZmYzOTMzODgzNEApaTZkNDk0aGRkNztkPDY0aGdpYXFhcjRnbWFgLS1kLy1zcy9eMjY1YDUtNWEtMDIuMC46Yw%3D%3D&vl=&vr="
        className="video-player"
        autoPlay
        onClick={onMuted}
        muted={Muted}
        loop
        ref={videoRef}
      ></video>
      <MuteIcon muteFlag={Muted} />
      <VideoSidebar></VideoSidebar>
      <VideoFooter
        uploader={"happy-sonday"}
        description={"짝사랑하다 화나버린 미노이"}
      />
      {/* <VideoSidebar />*/}
    </div>
  );
}

export default Video;
