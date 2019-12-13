import React from 'react'
import styles from './index.module.scss'

interface Props {}

function IndexHeader(props: Props) {
  return <header className={styles.header}>豆瓣电影</header>
}

IndexHeader.defaultProps = {}

export default IndexHeader
