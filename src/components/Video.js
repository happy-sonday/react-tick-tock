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

    // 뮤트 버튼 setTimeout 초기화
    clearTimeout(TimeoutId);

    if (Clicked === false) {
      setClicked(true);
    }

    // 뮤트 버튼 show off 장치,2초 동안 입력 이벤트가 없으면 버튼 사라짐
    setTimeoutId(
      setTimeout(() => {
        setClicked(false);
      }, 2000)
    );
  };

  return (
    <div className="video-wrap">
      <video
        src={props.url}
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
        likeCount={props.likeCount}
        messageCount={props.messageCount}
        shareCount={props.shareCount}
      ></VideoSidebar>

      <VideoFooter uploader={props.uploader} description={props.description} />

      {/* <VideoSidebar />*/}
    </div>
  );
}

export default Video;
