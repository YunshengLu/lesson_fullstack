# 异步之数据请求

1. xhr 与 fetch 关系？
    功能都是一样的 xhr旧时代，fetch es6 最新的api      
            fetch('http://127.0.0.1:3000/posts')
            // 二进制文件流
             .then(data => data.json())
             .then(data => data)       


        xhr = new XMLHttpRequest  xhr  实例     
        <!-- request 多动请求方法  get 明文  url输入   post  加密 -->
        xhr.open("GET", "http://127.0.0.1:3000/posts",true);
        xhr.send();     
        xhr.onreadystatechange = function(event){
            event.target.readyState  4
            JSON.parse(event.target.responseText)   JSON
            
        }