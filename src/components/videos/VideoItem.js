import React from "react";
import './VideoItem.css'

const VideoItem = ({video, onSelectedVideo}) => {
    return (
        <div className="video-item item" onClick={() => onSelectedVideo(video)}>
            <img className="ui image"
                 src={video.snippet.thumbnails.high.url}
                 alt={video.snippet.title}
            />
            <div className="content">
                <div className="description">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;