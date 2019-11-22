import './App.css'
import React from 'react'
// import logo from './logo.svg'
import Button from 'antd/es/button'
import QRCode from 'qrcode.react'
// var QRCode = require('qrcode.react')
import ListWrap from './components/hello/Hello'
import Home from './components/Home'
import Movie from './components/Movie'
import About from './components/About'
import 'antd/dist/antd.css'


// 路由
import { HashRouter, Switch, Route, Link } from 'react-router-dom'

/**
 * HashRouter 表示一个路由的跟容器
 * Route 表示一个路由规则，在Route上，有两个比较重要的属性，path component
 * Link 表示一个路由的链接，就好比vue中的<router-link to=""></router-link>
 */

function App() {
  return (
    // 当使用 HashRouter 把 App 根组件的元素包裹起来之后，网站就已经启用路由了
    <HashRouter>
      <div className="App">
        <Button type="primary">Button</Button>
        {/* <ListWrap></ListWrap> */}
        <QRCode value="http://facebook.github.io/react/" />
        <Link to="/home">首页</Link>
        <Link to="/movie">电影</Link>
        <Link to="/about">关于</Link>
        <hr />

        <Route path="/home" component={Home}></Route>
        <Route path="/movie" component={Movie}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </HashRouter>
  )
}

export default App
