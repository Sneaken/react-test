import React, { ChangeEvent, Component } from 'react'

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

  handleChange = (e: ChangeEvent<HTMLInputElement>, property: string) => {
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
      <div>
        <label>
          用户名：
          <input
            type="text"
            value={user}
            onChange={e => this.handleChange(e, 'user')}
          />
        </label>
        <br />
        <label>
          评论内容：
          <input
            type="text"
            value={msg}
            onChange={e => this.handleChange(e, 'msg')}
          />
        </label>
        <br />
        <button onClick={this.handleClick}>提交评论</button>
      </div>
    )
  }
}
