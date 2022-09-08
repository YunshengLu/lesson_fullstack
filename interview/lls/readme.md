- 瀑布流             
    数据是否做优化，了解虚拟列表吗？              
    react 难题            
        特殊的列表组件 长短不一            
        infinite scroll antd-mobile               
        性能优化题目             

        <List          
        dataSource={data}           
        render={}           
        />               

    - 给你十万条数据，如何显示？列表？                 
        - 不可能一次显示完            
            虚拟列表             
            - PC            
                分页组件               
            - Mobile              
                viewport vh / 10vh  10~20条                
                page&pageSize              
                scroll ? 加载更多？ scrollTop + vpH >= ConentHeight               

- createFragment             
- 不需要那么多真实DOM，虚拟列表                
    threshold 提前一点加载             
    ClientHeight + ScrollTop >= ScrollHeight - threshold               
