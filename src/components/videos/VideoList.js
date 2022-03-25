import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
    render() {
        const videos = this.props.videos;
        const renderedVideoList = videos.map(video => {
            return (
                <VideoItem
                    key={video.id.videoId}
                    video={video}
                    onSelectedVideo={this.props.onSelectedVideo}
                />
            );
        })


        return (
            <div className="ui relaxed divided list">
                {renderedVideoList}
            </div>
        )
    }
}

export default VideoList;