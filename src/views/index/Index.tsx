import React, { Component } from 'react'
import IndexSearch from '../../components/index/search/IndexSearch'
import IndexHeader from '../../components/index/header/IndexHeader'
import IndexMain from '../../components/index/main/IndexMain'
import { getTop250 } from '../../api'
import { ConfigProvider, Pagination } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import styles from './index.module.scss'
interface Props {}

interface State {
  list: IMovie[]
  allData: IMovie[]
  current: number
  first: boolean
}

export default class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      list: [],
      allData: [],
      current: 1,
      first: true
    }
  }

  handleSearch = async (val: string) => {
    const result = await getTop250()
    this.setState({
      first: false,
      list: [...result.subjects.filter(item => item.title.includes(val))],
      allData: [...result.subjects.filter(item => item.title.includes(val))]
    })
    this.handleChange(1, 10)
    // try {
    //   const result = await selectMovie(val)
    //   this.setState({
    //     list: [...result.Search],
    //     allData: [...result.Search]
    //   })
    //   this.handleChange(1, 10)
    // } catch (e) {
    //   console.log(e)
    // }
  }

  showTotal = (total: number) => `共 ${total} 条`

  handleChange = (page: number, pageSize: any) => {
    const { allData } = this.state
    this.setState({
      current: page,
      list: [
        ...allData.filter(
          (item, index) => index >= (page - 1) * pageSize && index < page * pageSize
        )
      ]
    })
  }
  handleSizeChange = (current: any, size: any) => {
    this.handleChange(1, size)
  }

  render() {
    return (
      <div>
        <IndexHeader />
        <IndexSearch handleSearch={this.handleSearch} />
        <IndexMain list={this.state.list} first={this.state.first} />
        <ConfigProvider locale={zhCN}>
          <Pagination
            className={styles.page}
            size="small"
            current={this.state.current}
            total={this.state.allData.length}
            showTotal={this.showTotal}
            onChange={this.handleChange}
            onShowSizeChange={this.handleSizeChange}
            hideOnSinglePage
            showSizeChanger
            showQuickJumper
          />
        </ConfigProvider>
      </div>
    )
  }
}
