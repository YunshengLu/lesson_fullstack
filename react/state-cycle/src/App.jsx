import React,{ useState,useEffect } from 'react'

const Hello = () => <div className="hello">Hello World!</div>
// JSX 对象  React.createElement('div',{className="hello",Hello World!},)
// console.log(Object.prototype.toString.call(Hello));
// 1. JSX 优秀 且简单的UI 表达创新
// 2. JSX  通过 babel 转义 -> React.createElement()
// 状态 自有 ，useState 响应式 ， 但是一般建议放在父组件中  
// 便于多个子组件共享数据 
// 子组件里使用 props 表示参数对象的
// 子组件里不要去添加自有状态，外界不同步，除非外界不要用
const Header = () => {
  return (
    <div>
      <Title title="首页"/>
    </div>
  )
}

// 传参 props 父组件传过来所有参数的集合
const Title =(props) =>{
  const {title} = props;
  return (
    <header>
      {title}
    </header>
  )
}

const Main = ({users}) =>{
  // props -> users
  return (
    <div>
      Main
      <ul>
        {/* uniq */}
      {users.map(user => <li key={user.id}>{user.id}:{user.name} - {user.age}</li>)}
      </ul>
    </div>
  )
}

const Footer = ({count}) =>{
  return (
    <footer>
      Footer,有{count}位用户
    </footer>
  )
}

const Index = () => {
  // 不是用 useState生成 数据绑定，且响应式
  // 状态 响应式
  // state 自有的，父组件
  const [users,setUsers] = useState([{
    name:'BEIYUE',
    age:18,
    id:1
  },{
    name:'LB',
    age:19,
    id:2
  }])
  // 声明周期函数 onload onDOMContentLoaded
  // Component useEffect onDOMContentLoaded 组件挂载了
  useEffect(() => {
    // console.log('组件加载好了');
    setTimeout(() => {
      setUsers([...users,
        {
          name:'xxx',
          age:19,
          id:3
        }
      ])
    },2000)
  },[])

  // setTimeout(() => {
  //   // users.push(
  //   //   {
  //   //     name:'xxx',
  //   //     age:19,
  //   //     id:3
  //   //   }
  //   // );
  //   // setUsers(users);
  //   setUsers([...users,
  //     {
  //       name:'xxx',
  //       age:19,
  //       id:3
  //     }
  //   ])
  // },1000)

  return (
    // 如果唯一的父元素只起到包裹作用，而不需要标签 可以省略他
    <>
      <Header/>
      <Main users={users}/>
      <Footer count={users.length}/>
    </>
  )
}

function App() {
  return (<Index/>)
  // return <Hello/>
  // return React.createElement('div',null,'hello world');
}

export default App
