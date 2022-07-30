// 1. 工具函数
//      字符串相关的操作
/**
 * @func 格式化数字
 * @params num: number
 * @return string
 * 1239904 -> 123.9万
 */
export function formatTenThousand(num: number): string {
    const numStr = String(num);
    if (numStr.length <= 4) {
        return numStr;
    }
    let wholeNumber = numStr.substring(0, numStr.length - 4);
    const thousands = numStr.substring(numStr.length - 4);
    // 通过首位(千位) 与 余位 得到的小数，toFixed 会四舍五入
    let decimalNumber = Number(thousands.substring(0, 1) + '.' + 
    thousands.substring(1)).toFixed(0)
    // 千位toFixed 进位后可能是10
    if (decimalNumber.length === 2) {
        decimalNumber = '0';
        wholeNumber = String(Number(wholeNumber) + 1);
    }
    return `${wholeNumber}.${decimalNumber}万`
}