import React, { Component } from 'react'
import Movie from './movie/Movie'

interface Props {
  list: IMovie[]
}

interface State {}

export default class IndexMain extends Component<Props, State> {
  // constructor(props: Props) {
  //   super(props)
  // }

  static defaultProps = {}

  render() {
    return (
      <div>
        {this.props.list.map(item => {
          return <Movie key={item.id} content={item} />
        })}
      </div>
    )
  }
}
