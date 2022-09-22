import { useState, useEffect } from 'react';
import useHooks from './hooks.js';

function App() {

  const { data, loading, error, send } = useHooks({
    url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/goods'
  });

  useEffect(() => {
    send();
  }, [])

  return (
    <div className="App">
      {
        JSON.stringify(data)
      }
      {
        loading && <div>加载中...</div>
      }
      {
        error && JSON.stringify(error)
      }
    </div>
  )
}

export default App
