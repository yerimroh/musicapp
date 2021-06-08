import React from 'react';
import ReactPlayer from "react-player"


const Video = ({videoId}) => {

    const queryurl = `https://youtube.com/watch?v=${videoId}`;

    return (
        <div>
            <ReactPlayer className = "video"
                url= {queryurl}
                width = '50vh'
                height = '30vh'
                playing = 'true'
            />
        </div>
    );

}; 

export default Video;