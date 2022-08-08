import { useState, useEffect } from 'react'
import './App.css'
import { addComment } from './api/request'

function App() {

  useEffect(() => {
    addComment().then((data) => {
      console.log(data);
    })
    // localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEyMzQ1NiwiaWF0IjoxNjU5OTQ3MDIwLCJleHAiOjE2NjAwMzM0MjB9.I91u19OwIpADHWLjYhrSHrWDa9Z1_3oeeGMjHhHEBQI')
  },[])

  return (
    <div className="App">
    </div>
  )
}

export default App
