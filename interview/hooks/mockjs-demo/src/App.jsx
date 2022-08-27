import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRequest } from 'ahooks'
import LazyLoad from 'react-lazyload'

function App() {

  const getMovies = () => {
    return new Promise((resolve, reject) => {
      axios.get('init_movie')
      .then(res => {
        resolve(res.data.data);
      })
    })
  }
  let { data: movies = [], error, loading } = useRequest(getMovies)

  useEffect(() => {

    // axios.get('init_movie')
    //   .then(res => {
    //     console.log(res);
    //   })
  }, [])

  return (
    <div className="App">
      {error && <div>出错了</div>}
      {loading && <div>加载中</div>}
      {movies.map((movie) => <div key={movie.id}>
        <div>{movie.title}</div>
        <div>{movie.content}</div>
        <div>
          <LazyLoad>
            <img src={movie.avatar} />
          </LazyLoad>
          </div>
      </div>)}
    </div>
  )
}

export default App