import { useState } from 'react'
import './App.css'
import RouterConfig from './routes'
import Footer from '@/components/Footer'

function App() {

  return (
    <div className="App">
      <Footer />
      <RouterConfig />
    </div>
  )
}

export default App
