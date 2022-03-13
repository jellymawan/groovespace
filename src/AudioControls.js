import React from 'react';
import {MdPauseCircleOutline, MdPlayCircleOutline, MdSentimentDissatisfied} from 'react-icons/md';
import {IconButton} from '@mui/material';

export const AudioControls = ({onPlayPauseClick, isPlaying}) => (
	<div className="col-1 play-pause-div">
    {isPlaying ? (
      <IconButton
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <MdPauseCircleOutline/>
      </IconButton>
    ) : (
      <IconButton
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
          <MdPlayCircleOutline/>     
      </IconButton>
    )}

  </div>
);