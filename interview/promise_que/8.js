/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-05 12:22:43
 * @LastEditTime: 2022-09-05 12:24:48
 */
async function async1() {
    console.log(1);
    const id = await async2()
    console.log(2);
}

async function async2() {
    console.log(3);
    const id = await new Promise((resolve, reject) => {
        setTimeout(resolve,100)
    })
    console.log(4);
}

async1()
console.log(5);