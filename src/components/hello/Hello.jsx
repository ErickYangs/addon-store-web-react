import React, { Component } from 'react'
import './hello.css'
import List from '../list/lis'
import './hello.module.css'
import hhscss from './a1.module.scss'
import './a1.scss'
import Button from 'antd/es/button'

export default class ListWrap extends Component {
  constructor() {
    super()
    this.state = {
      mainTitle: '评论列表',
      commentList: [
        {
          id: 1,
          name: 'Jack',
          comment:
            'TypeError: Class extends value undefined is not a constructor or null'
        },
        {
          id: 2,
          name: 'Alice',
          comment: '7岁胡歌的人生观让我明白：成人世界里，请停止低层次的忙碌'
        },
        {
          id: 3,
          name: 'Bob',
          comment: '看下在导出的时候是不是写的是module.export，正'
        },
        {
          id: 4,
          name: 'Lucy',
          comment:
            'TypeError: Class extends value undefined is not a constructor or null'
        },
        {
          id: 5,
          name: 'Jealous',
          comment: '40岁“宠妻男神”人设崩塌？多少女人，把老公养成了儿子'
        }
      ],
      message: '初始数据'
    }
  }

  //
  handlerClick(params) {
    console.log(params)
    // 改变 state 中的数据
    this.setState({
      message: params
    })
  }
  changeInput() {
    this.setState({
      message: this.refs.inputText.value
    })
  }
  render() {
    return (
      <div className="list_wrap">
        <div className={['main_title', 'primary', hhscss.primary2].join(' ')}>
          {this.state.mainTitle}
        </div>
        <div className="comment_wrap">
          {this.state.commentList.map(item => (
            <List {...item} key={item.id}></List>
          ))}
        </div>
        <Button type="danger" onClick={() => this.handlerClick('click func 🐷')}>
          Click
        </Button>
          <h3>{this.state.message}</h3>
          <input ref="inputText" type="text" value={this.state.message} onChange={() => this.changeInput()}/>
      </div>
    )
  }
}
