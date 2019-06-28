import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Your videos will show up here!</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
            <button> Publish to your feed </button>
        </div>

    )
}

export default VideoDetail;