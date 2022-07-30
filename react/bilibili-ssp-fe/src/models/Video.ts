/**
 * 视频
 */

interface Video {
    aid: number;
    title: string;
    pic: string;
    play: number;
    pts: number;
    publicData: number;
    duration: string;
    cid: number;
    author?: string;
}

export type {
    Video
}