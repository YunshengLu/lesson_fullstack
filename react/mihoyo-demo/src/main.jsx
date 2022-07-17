import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom' 
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import store from './store'
import 'swiper/css/swiper.css'
// import 'swiper/css'
import '@/assets/iconfont/iconfont.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
)