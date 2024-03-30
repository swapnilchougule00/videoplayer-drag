//@ts-nocheck
'use client'
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const PlayList = ({ videos , onVideoSelect}) => {
  const [playlist, setPlaylist] = useState(videos);

  const moveVideo = (dragIndex, hoverIndex) => {
    const draggedVideo = playlist[dragIndex];
    const updatedPlaylist = [...playlist];
    updatedPlaylist.splice(dragIndex, 1);
    updatedPlaylist.splice(hoverIndex, 0, draggedVideo);
    setPlaylist(updatedPlaylist);
  };

  const VideoItem = ({ index }) => {
    const video = playlist[index];
    const [{ isDragging }, drag] = useDrag({
      type: 'video',
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: "video",
      hover: (item) => {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveVideo(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
      <div className="border p-4 mb-2 cursor-grab" ref={drop} style={{ opacity }} onClick={()=>onVideoSelect(video)} >
        <div ref={drag}>{video.title}</div>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" p-2 ">
        {playlist && playlist.map((_, index) => (
          <VideoItem key={index} index={index} />
        ))}
      </div>
    </DndProvider>
  );
};

export default PlayList;
