import React, { Component } from 'react'
import './list.css'

export default class List extends Component {

  //  在组件即将挂在到页面上的时候执行，此时，组件尚未挂在到页面上
  // 虚拟DOM尚未开始创建
  componentWillMount() {
    // 此时，无法获取到页面上的任何元素，因为虚拟DOM和页面都还没有开始渲染，在这个阶段，不能去操作页面上的DOM 元素
    /**
     * 这个函数相当于 VUE 中的create函数
     */
  }
  /**
   * 当执行到这个生命周期函数的时候，即将要开始渲染内存中的虚拟DOM了，当这个函数执行完，内存中就有了一个渲染好的虚拟DOM
   */
  render() {
    return (
      <div className="list_item primary2">
        <div className="sub_title">{this.props.name}</div>
        <div className="comment_content">{this.props.comment}</div>
      </div>
    )
  }
/**
 * 当组件挂在到页面上之后，会进入这个生命周期函数，只要进入这个生命周期函数，必然说明，页面上，已经有可见的DOM元素了
 */
  componentDidMount() {
    // 在这个函数中，我们可以放心的去操作页面上的DOM元素
    // 相当于vue中的mounted函数
  }
}
