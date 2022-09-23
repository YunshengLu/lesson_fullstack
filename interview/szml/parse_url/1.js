// TODO hash tage
function parseParam(url) {
    const paramStr = /.+\?(.+)$/.exec(url)[1];
    const paramsArr = paramStr.split('&');
    let paramsObj = {};
    paramsArr.forEach(param => {
        if (/=/.test(param)) {
            let [key, val] = param.split('=');
            val = decodeURIComponent(val);
            val = /^\d+$/.test(val) ? parseFloat(val) : val;
            // 如果参数重复,存成数组
            if (paramsObj.hasOwnProperty(key)) {
                paramsObj[key] = [].concat(paramsObj[key], val);
            } else {
                paramsObj[key] = val;
            }
        } else {
            paramsObj[param] = true;
        }
    });
    return paramsObj;
    // console.log(paramStr);
}

console.log(parseParam('https://www.baidu?width=251&b&height=360&pdi=85&pdi=120#name'));
