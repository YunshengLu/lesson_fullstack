/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-31 17:08:39
 * @LastEditTime: 2022-08-31 17:16:16
 */
const traffic_light = (color, duration) => {
    return new Promise((resolve, reject) => {
        console.log('traffic_light', color);
        setTimeout(() => {
            resolve();
        }, duration);
    });
};

const main = async () => {
    await traffic_light('red', 3000);
    await traffic_light('yellow', 1000);
    await traffic_light('green', 3000);
    main();
};

main();
