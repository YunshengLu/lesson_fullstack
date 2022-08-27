- 假接口          
    1. URL + Method  restful              
    2. 返回的数据 UI需要的，接口文档              

- key 的作用             
    1. map 遍历UI输出时，要给key，不给就严重警告              
    2. map第二个参数index 为什么不能给？              
        [
            {id: '1234', title: 'sdfsffs', like: 10},
            {id: '1235', title: 'ohugu', like: 20},
            {id: '1236', title: 'nijohi', like: 111},
        ]
    3. 更新的时候 useEffect(, [movies])              
    id  id => O(n)               
        每一段JSX 标记一个KEY O(1) Map  uniq               
    4. index 不可以呢？ uniq 0 .. len-1                
        中间的莫一项 几项，删除             
            插入？                
    5. diff 算法               