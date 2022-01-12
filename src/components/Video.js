import React, { useRef, useState, useEffect } from "react";
import MuteIcon from "./MuteIcon";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video(props) {
  const videoRef = useRef(null);

  const [Muted, setMuted] = useState(true);
  const [Clicked, setClicked] = useState(false);
  const [TimeoutId, setTimeoutId] = useState(0);

  useEffect(() => {
    if (props.videoIndex === props.playingIndex) {
      videoRef.current.play();

      // 현재 재생 비디오 컴포넌트 ,초단위로 재생 된 시간
      //console.log(props.videoIndex, videoRef.current.currentTime);
      // 1초가 넘어가면 resume
      if (videoRef.current.currentTime > 1) {
        videoRef.current.currentTime = 0;
      }
    } else {
      videoRef.current.pause();
    }
  }, [props.playingIndex]);

  const onMuted = (event) => {
    setMuted(!Muted);
    clearTimeout(TimeoutId);

    if (Clicked === false) {
      setClicked(true);
    }

    setTimeoutId(
      setTimeout(() => {
        setClicked(false);
      }, 2000)
    );
  };

  return (
    <div className="video">
      <video
        src="https://v16-webapp.tiktok.com/239d0e399b61076a6eb4e9d881b49349/61df4661/video/tos/alisg/tos-alisg-pve-0037/b66eb9c787cd482796dd78e1fe5439d3/?a=1988&br=1804&bt=902&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=XOQ9-3m_nz7ThpD_dlXq&l=202201121520090102451581160436983D&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3JqZGU6ZmYzOTMzODgzNEApaTZkNDk0aGRkNztkPDY0aGdpYXFhcjRnbWFgLS1kLy1zcy9eMjY1YDUtNWEtMDIuMC46Yw%3D%3D&vl=&vr="
        className="video-player"
        onClick={(event) => onMuted(event)}
        muted={Muted}
        loop
        ref={videoRef}
      ></video>
      <MuteIcon
        muteFlag={Muted}
        clickedFlag={Clicked}
        onClick={(event) => onMuted(event)}
      />
      <VideoSidebar
        likeCount={300}
        messageCount={100}
        shareCount={50}
      ></VideoSidebar>

      <VideoFooter
        uploader={"happy-sonday"}
        description={"짝사랑하다 화나버린 미노이의 달콤살벌한 벌스"}
      />

      {/* <VideoSidebar />*/}
    </div>
  );
}

export default Video;
