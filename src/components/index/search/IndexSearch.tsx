import React, { ChangeEvent, Component } from 'react'
import { Input } from 'antd'
import styles from './index.module.scss'
const { Search } = Input

interface Props {
  handleSearch: Function
}

interface State {
  input: string
}

export default class IndexSearch extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSearch = (value: string) => {
    this.props.handleSearch(value)
    // this.setState({
    //   input: ''
    // })
  }
  render() {
    return (
      <div className={styles.search}>
        <Search
          placeholder="输入想看的电影呀"
          enterButton="Search"
          value={this.state.input}
          onChange={this.handleChange}
          size="large"
          onSearch={this.handleSearch}
        />
        <p className={styles.tip}>Sharing a few of our favourite movies</p>
      </div>
    )
  }
}
