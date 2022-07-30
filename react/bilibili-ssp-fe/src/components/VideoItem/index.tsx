import React from 'react'
import { Video } from '@/models/Video'

interface VideoItemProps {
    video: Video;
    showStatistics: boolean;
}

const VideoItem :React.FC<VideoItemProps> = (props) => {
    const  {
        video,
        showStatistics
    } = props

    return (
        <div>
            {video.aid}
        </div>
    )
}

export default VideoItem
