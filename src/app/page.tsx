//@ts-nocheck
'use client'
import VideoPlayer from '../components/VideoPlayer';
import PlayList from "@/components/Playlist";
import mediaJSON from "@/components/mediaJSON ";
import { useState } from 'react';

export default function Home() {

  const [selectedVideo, setSelectedVideo] = useState(mediaJSON.categories[0].videos[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };


  return (
    <div className="container md:flex gap-4 mx-auto py-8">
      <VideoPlayer selectedVideo={selectedVideo}/>
      <PlayList videos={mediaJSON.categories[0].videos}  onVideoSelect={handleVideoSelect}  />
    </div>
  );
}
