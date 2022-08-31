/*
 * @Description: 红绿灯
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-31 16:53:46
 * @LastEditTime: 2022-08-31 17:04:15
 */
const traffic_light = (color, duration) => {
    return new Promise((resolve, reject) => {
        console.log('traffic_light', color);
        setTimeout(() => {
            resolve()
        }, duration);
    })
}

// 任何代码都是死循环
const main = () => {
    Promise.resolve() // fulfilled promise
        .then(() => traffic_light('red', 3000))
        .then(() => traffic_light('yellow', 1000))
        .then(() => traffic_light('green', 3000))
        .then(() => {
            main();
        })
}

main();