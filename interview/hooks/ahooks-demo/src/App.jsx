import { useState } from 'react'
// useState 在toggle 切换组件提供遍历
import { useToggle, useRequest } from 'ahooks'
import Mock from 'mockjs'

function App() {
  const [state, {toggle}] = useToggle()
  function getUsername() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Mock.mock('@cname'))
      }, 1000)
    })
  }
  // 封装
  // getUsername 自己去请求数据
  // hooks 高阶函数
  const { data, error, loading } = useRequest(getUsername)
  if (error) {
    return <div>failed to load</div>
  }
  if (loading) {
    return <div>loading...</div>
  }
  return <div>Username: {data}</div>

  return (
    <div className="App">
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  )
}

export default App
