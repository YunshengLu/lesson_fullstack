// - 实现日期格式函数
// '2022-01-01' yyyy/MM/dd    2022/01/01
// '2022-04-21' yyyy/MM/dd    2022/04/21
// '2022-04-21' yyyy年MM月dd日  2022年04月21日
const dateFormat = (date, format) => {
    // console.log(typeof date,Object.prototype.toString.call(date));
    // console.log(date.getDate() < 10 ? '0' + date.getDate() : date.getDate);
    var day = date.getDate();
    if(day < 10){
        day = '0' + day;
    }
    var month = date.getMonth() + 1; // 月份是从零开始
    if(month < 10){
        month = '0' + month;
    }
    var year = date.getFullYear();
    // console.log(day,month,year);
    var year = date.getFullYear();
    format = format.replace('yyyy',year);
    // console.log(format,'-------------');
    format = format.replace('MM',month);
    format = format.replace('dd',day);
    return format;
};

console.log(dateFormat(new Date('2022-04-21'), 'yyyy/MM/dd'));
console.log(dateFormat(new Date('2022-04-21'), 'yyyy年MM月dd日'));
