import React from "react";
import SearchBar from "./search/SearchBar";
import axios from "../apis/Youtube"
import VideoList from "./videos/VideoList";
import VideoPlayer from "./videos/VideoPlayer";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: ''
    }

    componentDidMount() {
        this.onSearchTermSubmit('news')
    }

    onSearchTermSubmit = async (searchTerm) => {
        const response = await axios.get('/search', {params: {q: searchTerm}});
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        //console.log(this.state.videos)
    }

    onSelectedVideo = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchTermSubmit}/>
                <p> I found {this.state.videos.length} videos !!</p>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoPlayer video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;