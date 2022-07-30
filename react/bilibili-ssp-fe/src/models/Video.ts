/**
 * 视频
 */

interface Video {
    aid: number;
    title: string;
    pic: string;
    playCount: number;
    barrageCount: number;
    publicData: number;
    duration: string;
    cid: number;
    author?: string;
}

export type {
    Video
}