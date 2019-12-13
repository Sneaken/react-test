import React from 'react'
import styles from './index.module.scss'
interface IProps {
  content: IMovie
}

function Movie(props: IProps) {
  return (
    <div className={styles.item}>
      <div>{props.content.title}</div>
    </div>
  )
}

Movie.defaultProps = {}

export default Movie
