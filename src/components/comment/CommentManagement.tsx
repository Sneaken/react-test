import React, { Component, ReactNode } from 'react'
import CommentManagementLeft from './CommentManagementLeft'
import CommentManagementRight from './CommentManagementRight'
import styles from './comment-management.module.scss'
import cs from 'classnames'
interface Props {}

interface Comment {
  user: string
  msg: string
}
interface State extends Comment {
  list: Array<Comment>
}

export default class CommentManagement extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      user: '',
      msg: '',
      list: []
    }
  }

  handleSubmit = (user: string, msg: string) => {
    const list = this.state.list
    this.setState({
      user,
      msg,
      list: [{ user, msg }, ...list]
    })
  }
  handleDelete = (index: number) => {
    const list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: [...list]
    })
  }
  render(): ReactNode {
    const { list } = this.state
    return (
      <div className={styles['wrap']}>
        <h3
          className={cs(styles['title'], {
            [styles['label']]: false
          })}
        >
          评论管理
        </h3>
        <div className={styles['bottom']}>
          <CommentManagementLeft handleSubmit={this.handleSubmit} />
          <CommentManagementRight
            list={list}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    )
  }
}
