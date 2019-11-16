import React, { Component } from 'react'
import './list.css'

export default class List extends Component {
  render() {
    return (
      <div className="list_item primary2">
        <div className="sub_title">{this.props.name}</div>
        <div className="comment_content">{this.props.comment}</div>
      </div>
    )
  }
}
