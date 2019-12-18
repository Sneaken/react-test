import React, { Component } from 'react'
import { getNews } from '../../api'
import ListItem from '../../components/news/ListItem'
import { ConfigProvider, Pagination } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

interface IProps {}

interface IState {
  list: INewsListContent[]
}

export default class NewsIndex extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      list: []
    }
  }

  async componentDidMount() {
    const result = await getNews(1)
    this.setState({
      list: result
    })
  }
  handleChange = async (page: number, pageSize: any) => {
    const result = await getNews(page)
    this.setState({
      list: result
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <ListItem key={item.aid} content={item} />
          ))}
        </ul>
        <ConfigProvider locale={zhCN}>
          <Pagination showQuickJumper total={62} onChange={this.handleChange} />
        </ConfigProvider>
      </div>
    )
  }
}
