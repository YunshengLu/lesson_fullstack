// API 应用程序接口 Application Interface

// fetch axios  fastmock
// 取数据，api 负责这件事的
// 前端 url get  /todos  后端 ? 负责在 /todes 提供 todos 数据?
// 前端和后端的数据交换格式是 json
const todos = [
    // todo
    {
        id: '1',
        text: 'todo1',
        finished: true,
    },
    {
        id: '2',
        text: 'todo2',
        finished: false,
    },
    {
        id: '3',
        text: 'todo3',
        finished: true,
    },
    {
        id: '4',
        text: 'todo4',
        finished: true,
    },
    {
        id: '5',
        text: 'todo5',
        finished: true,
    }
];

// delay 函数
const delay = time => new Promise(resolve => setTimeout(resolve, time));
// withDelay(function() {})  return async 函数
const withDelay = fn => async (...args) => {
        await delay(1000);
        return fn(...args);
    };

// withDelay(function () {})(1, 2, 3);

export const fetchTodos = withDelay(params => {
    // console.log(params);
    const { query, tab } = params;
    // console.log(query, tab);
    let result = todos;
    if(tab){
        switch (tab){
            case 'finished':
                result = result.filter(todo => todo.finished === true);
                break;
            case 'unfinished':
                result = result.filter(todo => todo.finished === false);
                break;
            default:
                break;
        }
    }
    if(query){
        result  = result.filter(todo => todo.text.includes(query));
    }
    // Promise类 resolve静态方法
    // Promise.all 返回一个 fulfilled 的promise 实例
    // 一般用于 返回结果的promise 化 
    return Promise.resolve({
        tab,result
    })
})
