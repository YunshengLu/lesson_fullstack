import { useState, useEffect } from 'react'
import './App.css'
import classnames from 'classnames'
import WeUI from 'react-weui'
import Contest from './components/contest'
import { getContestData } from './api/request'
const {
  Toast
} = WeUI

function App() {
  const [list, setList] = useState([])
  const [tab, setTab] = useState('all')
  const [showLoading, setShowLoading] = useState(false)
  // const tabClasses = ['item']

  useEffect(() => {
    setTimeout(() => {
      setTab('dj')
    }, 2000)
  })
  useEffect(() => {
    // console.log('-----------------')
    (async () => {
      setShowLoading(true)
      let {data} = await getContestData();
      setList([
        ...data
      ])
      setShowLoading(false)
    })()
    // fetch('https://www.fastmock.site/mock/759aba4bef0b02794e330cccc1c88555/beers/match')
    // .then(data => data.json())
    // .then(data =>{
    //   setList([
    //     ...data
    //   ])
    //   setShowLoading(false)
    // })

    // setTabClasses([
    //   ...tabClasses,
    //   'current'
    // ])
    // tabClasses.push('current')
    // console.log(tabClasses)
  }, [tab])

  // useEffect(() => {
  //   if(list.length > 0) {
  //     setShowLoading(false)
  //   }
  // },[list])

  return (
    <div className="App">
      <Contest data={list} />
      <a href="#" className={classnames('item', {current:tab == 'all'})}>全部</a>
      <Toast  icon="success-no-circle" show={showLoading}>加载中...</Toast>
    </div>
  )
}

export default App
