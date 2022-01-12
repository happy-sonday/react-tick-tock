import { VolumeOff, VolumeUp } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./MuteIcon.css";

function MuteIcon(props) {
  return (
    <div
      className={
        "mute-circle-background " + (props.clickedFlag && "display-on")
      }
      onClick={props.onClick}
    >
      {props.muteFlag ? (
        <VolumeOff className="volume-off-icon" />
      ) : (
        <VolumeUp className="volume-on-icon" />
      )}
    </div>
  );
}

export default MuteIcon;
