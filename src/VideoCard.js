import React, { useRef, useState } from 'react'
import "./VideoCard.css"
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

function VideoCard({url,likes,shares,channel,avatarSrc,song}) {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress =()=>{
        if(isVideoPlaying){
            videoRef.current.pause();
            setIsVideoPlaying(false)
        }else{
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }


    return (
        <div className="videoCard">
        <VideoHeader/>
            <video
            ref={videoRef}
            onClick={onVideoPress}
            className="videoCard__player"
            src={url}
            alt="Instagram "
            loop
            />
            <VideoFooter
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
                
            />
            
        </div>
    )
}

export default VideoCard
