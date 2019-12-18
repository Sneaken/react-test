import React, { Component } from 'react'
import { getArticle } from '../../api'
import { RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {}

interface IState {
  content: INewsContent
}

interface IParams {
  id: string
}
class NewsContent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      // @ts-ignore
      content: {}
    }
  }

  async componentDidMount() {
    const result = await getArticle((this.props.match.params as IParams).id)
    this.setState({
      content: result
    })
  }
  shouldComponentUpdate(
    nextProps: Readonly<IProps>,
    nextState: Readonly<IState>,
    nextContext: any
  ): boolean {
    return JSON.stringify(nextState.content) !== '{}'
  }

  render() {
    let result
    const { content } = this.state
    if (JSON.stringify(content) !== '{}') {
      result = <div dangerouslySetInnerHTML={{ __html: content.content }} />
    } else {
      result = <div />
    }
    return result
  }
}

export default NewsContent
