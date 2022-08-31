/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-18 15:51:46
 * @LastEditTime: 2022-08-31 17:28:46
 */
let sleep = time => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
};

async function changeColor(color, duration) {
    console.log('traffice-light', color);
    await sleep(duration);
}

const main = async () => {
    while (true) {
        await changeColor('red', 3000);
        await changeColor('yellow', 1000);
        await changeColor('green', 3000);
    }
};

main();
