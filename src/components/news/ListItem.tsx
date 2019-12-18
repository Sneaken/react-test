import React from 'react'
import { NavLink } from 'react-router-dom'
interface IProps {
  content: INewsListContent
}

function ListItem(props: IProps) {
  return (
    <li>
      <NavLink to={`/article/${props.content.aid}`}>{props.content.title}</NavLink>
    </li>
  )
}

ListItem.defaultProps = {}

export default ListItem
