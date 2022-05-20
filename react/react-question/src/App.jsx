import { useState } from 'react'
import './App.css'
import Dog from './Dog'
import Computer from './Computer'
import Notification from './Notification'

function App() {
  const [num,setNum] = useState(0)

  setTimeout(() =>{
    setNum(2)
  },1000)

  return (
    <div className="App">
      {/* 自定义组件 <Dog></Dog> */}
      <Dog/>
      <Dog/>
      <Computer/>
      <Computer/>
      <Notification n={num}/>
    </div>
  )
}

export default App
