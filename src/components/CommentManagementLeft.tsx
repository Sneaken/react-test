import React, { ChangeEvent, Component } from 'react'
import { Button, Input } from 'antd'
import styles from './comment-management.module.scss'
const { TextArea } = Input

interface Props {
  handleSubmit: Function
}

interface State {
  [x: string]: string
  user: string
  msg: string
}

export default class CommentManagementLeft extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      user: '',
      msg: ''
    }
  }

  static defaultProps = {}

  handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    property: string
  ) => {
    this.setState({
      [property]: e.target.value
    })
  }

  handleClick = () => {
    const { user, msg } = this.state
    this.props.handleSubmit(user, msg)
    this.setState({
      user: '',
      msg: ''
    })
  }
  render() {
    const { user, msg } = this.state
    return (
      <div className={styles.left}>
        <div className={styles.label}>
          <label>
            用户名：
            <Input
              className={styles.input}
              type="text"
              value={user}
              onChange={e => this.handleChange(e, 'user')}
            />
          </label>
          <label>
            评论内容：
            <TextArea
              className={styles.input}
              value={msg}
              onChange={e => this.handleChange(e, 'msg')}
            />
          </label>
        </div>
        <div className={styles.button}>
          <Button type="primary" onClick={this.handleClick}>
            提交评论
          </Button>
        </div>
      </div>
    )
  }
}
