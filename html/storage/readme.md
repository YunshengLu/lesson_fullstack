# LocalStorage

- 前端是可以有独立的存储能力     
    相对于mysql 空间小，但够用就好 个人设置，页面可以秒开          
    LocalStorage 作为本地存储来使用 5M              
    只能存储字符串格式的数据，所以在每次存储时把数据转换成json格式，取出的时候再转换回字符串格式

1. 以key value方式存储数据    
    存储 localStorage.setItem(key,value) String格式       
    获取 localStorage.getItem(key)

2. JSON.stringify();        
    将json格式的数据（JavaScript 对象）转换成JSON格式的字符串        
    JSON.parse();           
    将JSON格式的字符串转换成JSON对象进行处理