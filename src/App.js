import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./components/Video";

function App() {
  const [PlayingIndex, setPlayingIndex] = useState(0);

  const onScroll = (event) => {
    const videoHeight = event.target.clientHeight;
    let currentScrollPosition = event.target.scrollTop;
    let currentVideoIndex = currentScrollPosition / videoHeight;
    let isNotScrolling = Number.isInteger(currentVideoIndex);
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
        <Video videoIndex={0} playingIndex={PlayingIndex} />
        <Video videoIndex={1} playingIndex={PlayingIndex} />
        <Video videoIndex={2} playingIndex={PlayingIndex} />
        <Video videoIndex={3} playingIndex={PlayingIndex} />
      </div>
    </div>
  );
}

export default App;
