import './App.css'
import React from 'react'
// import logo from './logo.svg'
import Button from 'antd/es/button'
import QRCode from 'qrcode.react'
// var QRCode = require('qrcode.react')
import ListWrap from './components/hello/Hello'

function App() {

  return (
    <div className="App">
      <Button type="primary">Button</Button>
      {/* <ListWrap></ListWrap> */}
      <QRCode value="http://facebook.github.io/react/" />
    </div>
  )
}

export default App
