import { Video } from '@/models/index'

// const videos:Video[] = [{
//     id: 1,
//     name: '日本沙雕网友看完⚡领 导 讲 话⚡等视频后学会说废话',
//     pic: 'https://i0.hdslb.com/bfs/archive/4aad2a38c0cad14aceaf0e966654cf4f42474411.jpg@672w_378h_1c.webp'
// },{
//     id: 2,
//     name: '日本沙雕网友看完⚡领 导 讲 话⚡等视频后学会说废话',
//     pic: 'https://i0.hdslb.com/bfs/archive/4aad2a38c0cad14aceaf0e966654cf4f42474411.jpg@672w_378h_1c.webp'
// },{
//     id: 3,
//     name: '日本沙雕网友看完⚡领 导 讲 话⚡等视频后学会说废话',
//     pic: 'https://i0.hdslb.com/bfs/archive/4aad2a38c0cad14aceaf0e966654cf4f42474411.jpg@672w_378h_1c.webp'
// },]

export const getVideosRequest = (): Promise<Video[]>  =>{
    const p = new Promise<Video[]>((resolve, reject) =>{
        // setTimeout(() =>{
        //     resolve(videos)
        // },1000)
        fetch('http://localhost:3300/getVideos')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                resolve(data);
            })
    })
    return p
}