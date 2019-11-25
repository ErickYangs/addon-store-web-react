import React, { Component } from 'react'
import loginScss from '../../styles/login.module.scss'

export class LoginLayout extends Component {
  render() {
    console.log(loginScss)
    return (
      <div>
        <div className={loginScss.login_layout}>
          <div className={loginScss.title}></div>
          <div className="tips _tps_top">
            Already have Account.
            <span>Sign up.</span>
          </div>
          <div className={loginScss.qrcode}>
            <img src="imgUrl" alt="true" />
          </div>
          <div className="tips _tps_btm">
            Log in using
            <span>Authenticator</span> scan code
          </div>
          <div className={loginScss.download}>
            <span className="link">Download Authenticator App</span>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginLayout
