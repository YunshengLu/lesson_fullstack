import { useState,useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { doSearch } from './api/request'
// import 'antd/dist/antd.css'
// import Cart from './conponents/cart'

function App() {
  const [filter,setFilter] = useState('');
  const [debounceFilter] = useDebounce(filter,500);
  const [userCollection,setUserCollection] =useState([]);

  // console.log(debounceFilter);
  useEffect(() => {
    if(!filter){
      return ;
    }
    (async() => {
      const {data:{results}} = await doSearch(filter);
      console.log(results);
      setUserCollection(results);
    })()
    
    // console.log(result);
    // const doSearch = async () => {
    //   // fetch(`https://swapi.dev/api/people?search=${filter}`)
    //   //       .then(response => response.json)
    //   //       .then((json) => setUserCollection(json.results))
    //   const {data:results} = await axios.get(`https://swapi.dev/api/people?search=${filter}`)
    //   // console.log(result);
    //   setUserCollection(results);
    // }
    // doSearch();
  },[debounceFilter])

  return (
    <div className="App">
      {/* <Cart/> */}
      <input 
              value={filter} 
              onChange={
              (e) => setFilter(e.target.value)} />
      <ul>
        {
          userCollection.length > 0 && userCollection.map((user,index) => (
            <li key={index}>{user.name}</li>
          ))
        }
      </ul>
      {
        userCollection.length==0&&<div>没有记录</div>
      }
    </div>
  )
}

export default App
