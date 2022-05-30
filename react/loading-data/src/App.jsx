import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [posts,setPosts] = useState([])
  // JSX 首屏显示不会受数据请求的阻塞
  useEffect(() =>{
    // console.log('---------');
    // fetch('http://localhost:1234/posts')
    // .then(data => data.json())
    // .then(data => {
    //   // console.log(data);
    //   setPosts(data)
    // })

    (async function(){
      const result =  await fetch('http://localhost:1234/posts')
      const data = await result.json();
      // console.log(data);
      setPosts(data);
    })()
  },[])

  return (
    <div className="App">
      {!posts.length && <div>正在加载中...</div>}
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </div>
  )
}

export default App
