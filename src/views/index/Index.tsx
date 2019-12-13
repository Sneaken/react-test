import React, { Component } from 'react'
import IndexSearch from '../../components/index/search/IndexSearch'
import IndexHeader from '../../components/index/header/IndexHeader'
import { getTop250 } from '../../api'

interface Props {}

interface State {
  list: IMovie[]
}

export default class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      list: []
    }
  }

  handleSearch = async (val: string) => {
    const result = await getTop250()
    this.setState({
      list: [...result.subjects]
    })
  }

  render() {
    return (
      <div>
        <IndexHeader />
        <IndexSearch handleSearch={this.handleSearch} />
      </div>
    )
  }
}
