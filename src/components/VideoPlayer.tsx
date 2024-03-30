//@ts-nocheck
'use client'
import { useRef, useState } from 'react';


const VideoPlayer = ({selectedVideo}) => {



  return (
    <div className="relative">
      <h1 className='mb-4 text-2xl '>{selectedVideo.title}</h1>
      <video
        className="w-full"
        controls
        src={selectedVideo.sources[0]}
        autoPlay
      />
    </div>
  );
};

export default VideoPlayer;
