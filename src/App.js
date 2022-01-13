import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./components/Video";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [PlayingIndex, setPlayingIndex] = useState(0);
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos(db).then((result) => {
      setVideos(result);
    });
    console.log(Videos);
  }, []);

  // 파이어 베이스로 부터 데이터 프로미스 객체 획득
  const getVideos = async () => {
    const videosCol = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCol);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    return videosList;
  };

  // 스크롤시 element가 가지는 height로 나누어서 재생할 비디오 인덱스 값 구함
  const onScroll = (event) => {
    const videoHeight = event.target.clientHeight;
    let currentScrollPosition = parseInt(event.target.scrollTop);
    let currentVideoIndex = currentScrollPosition / videoHeight;
    let isNotScrolling = Number.isInteger(currentVideoIndex);

    console.log(currentScrollPosition, videoHeight, isNotScrolling);
    if (isNotScrolling) {
      //console.log(currentVideoIndex);
      setPlayingIndex(currentVideoIndex);
    }
  };

  return (
    <div className="app">
      <div
        className="app-videos"
        onScroll={(event) => {
          onScroll(event);
        }}
      >
        {Videos.map((video, index) => (
          <Video
            key={index}
            videoIndex={index}
            playingIndex={PlayingIndex}
            url={video.url}
            uploader={video.uploader}
            description={video.description}
            likeCount={video.likeCount}
            messageCount={video.messageCount}
            shareCount={video.shareCount}
          />
        ))}
        {/*  <Video videoIndex={0} playingIndex={PlayingIndex} />
        <Video videoIndex={1} playingIndex={PlayingIndex} />
        <Video videoIndex={2} playingIndex={PlayingIndex} />
        <Video videoIndex={3} playingIndex={PlayingIndex} /> */}
      </div>
    </div>
  );
}

export default App;
