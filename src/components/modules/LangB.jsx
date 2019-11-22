import React, { Component } from 'react'
import { Menu, Dropdown } from 'antd'
import '../../styles/langb.scss'

const menu = (
  <Menu>
    <Menu.Item>
      <span>中文</span>
    </Menu.Item>
    <Menu.Item>
      <span>English</span>
    </Menu.Item>
  </Menu>
)
export class LangB extends Component {
  render() {
    return (
      <div id="langb">
        <Dropdown
          overlay={menu}
          getPopupContainer={() => document.getElementById('langb')}
        >
          <a className="ant-dropdown-link">
            English
          </a>
        </Dropdown>
      </div>
    )
  }
}

export default LangB
