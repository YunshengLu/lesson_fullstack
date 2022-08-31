/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-18 15:47:39
 * @LastEditTime: 2022-08-31 17:14:09
 */
let fun = () => console.log()

let sleep = time => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
};

async function wait (time) {
    await sleep(time);
    fun();
}

wait(3000);