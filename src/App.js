import React from 'react'
// import logo from './logo.svg'
import Button from 'antd/es/button'
import './App.css'
import ListWrap from './components/hello/Hello'

function App() {

  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <ListWrap></ListWrap>
    </div>
  )
}

export default App
