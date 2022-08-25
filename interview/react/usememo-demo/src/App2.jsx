/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-25 14:50:07
 * @LastEditTime: 2022-08-25 15:31:58
 */
import { useState, useCallback, useEffect } from 'react'
import Button from './Button'

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // 以上任何一个状态改变，handleClickButton 会重新生成？
  const handleClickButton1 = () => {
    setCount1(count1 + 1);
  }
  // useCallback hooks高阶函数
  // 返回值是真正的传给子组件的函数
  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2])

  useEffect(() => {
    setTimeout(() => {
      setCount2(count2 + 1);
    }, 1200)
  }), []

  return (
    <div className="App">
      <div>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
      <div>
        <Button onClickButton={() => {
          setCount3(count3 + 1);
        }}>Button3</Button>
      </div>
    </div>
  )
}

export default App
