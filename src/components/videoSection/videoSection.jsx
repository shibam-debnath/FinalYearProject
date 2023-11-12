/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styles from './videoSection.module.scss';

const videoSection = () => {
  const videoId = '5p248yoa3oE';
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const toggleVideo = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.video_section}>
      <div className={styles.video_container}>
        <YouTube videoId={videoId} onReady={onReady} />
      </div>
      <button className={styles.start_presentation_button} onClick={toggleVideo}>
        {isPlaying ? 'Pause Presentation' : 'Start Presentation'}
      </button>
    </div>
  );
};

export default videoSection;