import React from 'react'
import styles from './index.module.scss'
import { Tooltip, Rate } from 'antd'
interface IProps {
  content: IMovie
}

function Movie(props: IProps) {
  const title = (
    <div>
      <p>{props.content.title}</p>
      <Rate disabled defaultValue={props.content.rating.average / 2} />
      <div>
        <span>主演:</span>
        <span>{props.content.casts.map(item => item.name).join(',')}</span>
      </div>
      <div>
        <span>类型:</span>
        <span>{props.content.genres.join('/')}</span>
      </div>
      <div>
        <span>片长:</span>
        <span>{props.content.durations[0]}</span>
      </div>
      <div>
        <span>上映日期:</span>
        <span>{props.content.pubdates.join('/')}</span>
      </div>
    </div>
  )
  return (
    <React.Fragment>
      <Tooltip placement="right" title={title} mouseEnterDelay={0.5}>
        <div>
          <img
            src={props.content.images.small.replace('http://', 'http://images.weserv.nl/?url=')}
            alt=""
            width="300"
            height="400"
          />
        </div>
        <div className={styles.title}>{props.content.title}</div>
      </Tooltip>
    </React.Fragment>
  )
}

Movie.defaultProps = {}

export default Movie
