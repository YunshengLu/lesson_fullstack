// 函数， 判断文件是否是图片文件
// a.txt
// b.jpg
// c.webp

/**
 * 代码最重要的是可读性
 * @param {String} file 文件名
 * @return {boolean} 是否是图片
 * @author 作者
 * @date 时间
 */

function checkIsFile(file) {
    // console.log(file);
    // file 不能为空
    if (!file) {
        return false;
    }

    // [ 'a', 'txt' ]
    /*     if (
        file.split('.')[1] == 'jpg' ||
        file.split('.')[1] == 'jpeg' ||
        file.split('.')[1] == 'gif' ||
        file.split('.')[1] == 'png' ||
        file.split('.')[1] == 'svg' ||
        file.split('.')[1] == 'webp' ||
        file.split('.')[1] == 'awebp'
    ) {
        return true;
    } */

    /*     let pos = ['jpg', 'jpeg', 'gif', 'png', 'svg', 'webp', 'awebp'].indexOf(file.split('.')[1])

    if(pos == -1){
        return false;
    }else{
        return true;
    } */

    // return false;

    let imgFormats = ['jpg', 'jpeg', 'gif', 'png', 'svg', 'webp', 'awebp'];
    return imgFormats.indexOf(file.split('.')[1]) == -1 ? false : true;
}

console.log(checkIsFile('a.jpg'));
