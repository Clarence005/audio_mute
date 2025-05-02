import React, { useEffect } from 'react';
import Hls from 'hls.js';

const AudioPlayer = ({ id, url }) => {
  useEffect(() => {
    const audio = document.getElementById(id);
    if (!audio || !url) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(audio);
    } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
      audio.src = url;
    }
  }, [id, url]);

  return <audio id={id} controls style={{ width: '100%' }} />;
};

export default AudioPlayer;
