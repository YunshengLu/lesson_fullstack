- 函数式编程的代表            
- class 组件和函数式组件有什么区别？              
    1. react 自从16版本后就推出了函数式组件          
    2. 类式组件已是过去式了，没有怎么关注                   
    3. 类式组件的缺点是 为了面向对象而面向对象，很多代码浪费             
        函数式组件 简单高效，return JSX 就是函数式组件 + 一系列的hooks 函数，高效完成相应功能             
        - 类式组件代码量多，继承React.Component 类、render 方法，this.state, componentDidMount 生命周期等，
        函数式编程两倍左右的代码             
        - 函数式组件 返回JSX 就是组件，还有丰富且灵活的hooks 函数完成工作              
        - react 编程进入到函数式编程的世界            
        - hooks 底层其实就是 封装，闭包，高阶函数              
        - hooks 编程是react/vue 拥抱的，当下最佳开发方式               
    4. react-router-dom useNavigate 等 第三方或自定义的hooks 可以方便的引入很多高级功能，简单好用             
        ahooks 常用hooks 库            
```jsx   
        // 函数式
        const Demo = () => {
            const [name, setName] = useState('Tom')
            useEffect(() => {
                setName('Jack')
            }, [])
            return (
                <ul>
                    <li>{name}</li>
                </ul>
            )
        }

        // 类式
        class Demo extends React.Component {
            constructor() {
                this.state = {
                    name: 'Tom'
                }
            }
            // useEffect mounted
            componentDidMount() {
                this.setState({
                    ...this.state,
                    name: 'Jack'
                })
            }
            render() {
                return (
                    <ul>
                        <li>{this.state.name}</li>
                    </ul>
                )
            }
        }
```

- 假接口 用过mock 吗？               
    - 前后端分离开发                
        前端需要在真实接口到达前，用假接口先顶一下                
        先定义接口文档，再分离开发           
    - fastmock 好用 可视化，跨域                
    - node 自己写             
        restful Method + url            
        简单的 自己解决跨域          
        mysql 复杂          
    - mockjs  npm 包             