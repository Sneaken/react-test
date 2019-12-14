import React, { Component } from 'react'
import Movie from './movie/Movie'
import styles from './index.module.scss'
interface Props {
  list: IMovie[]
  first: boolean
}

interface State {
  count: number
}

export default class IndexMain extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  static defaultProps = {}

  render() {
    if (this.props.first) {
      return <div />
    }
    let result
    if (this.props.list.length === 0) {
      result = <p className={styles['no-data']}>we didn't collect these, please search other</p>
    } else {
      result = (
        <ul className={styles.flex}>
          {this.props.list.map(item => {
            return (
              <li key={item.title} className={styles.li}>
                <Movie content={item} />
              </li>
            )
          })}
        </ul>
      )
    }
    return result
  }
}
