import { VolumeOff, VolumeUp } from "@mui/icons-material";
import React, { useState } from "react";
import "./MuteIcon.css";

function MuteIcon(props) {
  return (
    <div className="mute-circle-background">
      {props.muteFlag ? (
        <VolumeOff className="volume-off-icon" />
      ) : (
        <VolumeUp className="volume-on-icon" />
      )}
    </div>
  );
}

export default MuteIcon;
