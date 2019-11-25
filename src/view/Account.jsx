import React, { Component } from 'react'
// import '../styles/account.scss'
import accountScss from '../styles/account.module.scss' // 模块化加载 css 防止全局使用 相当于 scoped
import LangDiv from '../components/modules/LangB'
import LoginDiv from '../components/accountModule/Login'

export class AccountWrap extends Component {
  render() {
    return (
      <div className={accountScss.account_layout}>
        <div className={accountScss.end_bg}>
          <div className={accountScss.end_left}></div>
          <div className={accountScss.end_right}></div>
        </div>
        <div className={accountScss.mid_bg}>
          <div className={accountScss.bg1}></div>
          <div className={accountScss.bg2}></div>
        </div>
        <div className={accountScss.tp_box}>
          <div className={accountScss.tp_home}>
            <div className={accountScss.logo}></div>
            <div className={accountScss.lang_layout}>
              <LangDiv></LangDiv>
            </div>
          </div>
        </div>
        <div className={accountScss.desc_lay}>
          <div className={accountScss.content}>
            <div className={accountScss.desc_bx}>
              <span>DDXF</span> is a decentralized data exchange and
              collaboration framework. DDXF is able to tokenize any valuable
              data and provides data traceability and cross-system data
              processing.
            </div>
          </div>
        </div>
        <div className={accountScss.center_layout}>
          <div className={accountScss._left}></div>
          <div className={accountScss._right}>
            <div className={accountScss.account_msg}>
              <LoginDiv></LoginDiv>
              {/* <router-view /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountWrap
