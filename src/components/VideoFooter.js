import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";

function VideoFooter(props) {
  return (
    <div className="video-footer">
      <div className="video-footer-text">
        <h2 className="uploader">@{props.uploader}</h2>
        <Ticker mode="smooth" offset={100}>
          {({ index }) => (
            <>
              <p>{props.description}</p>
            </>
          )}
        </Ticker>

        <img
          className="video-record-icon"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default VideoFooter;
