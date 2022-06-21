import { useState, Suspense } from 'react'
import './App.css'
import RoutesConfig from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header/>
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App
