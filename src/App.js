import './App.css'
import React from 'react'
import 'antd/dist/antd.css'

import AccountWrap from './view/Account'

// 路由
import { HashRouter, Route } from 'react-router-dom'

/**
 * HashRouter 表示一个路由的跟容器
 * Route 表示一个路由规则，在Route上，有两个比较重要的属性，path component
 * Link 表示一个路由的链接，就好比vue中的<router-link to=""></router-link>
 */

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route path="/account" component={AccountWrap}></Route>
      </div>
    </HashRouter>
  )
}

export default App
