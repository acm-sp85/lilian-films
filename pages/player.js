// components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoSrc }) => {
  return (
    <div>
      <ReactPlayer url={'https://vimeo.com/647795630'} controls width="800px" />
    </div>
  );
};

export default VideoPlayer;
