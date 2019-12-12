import React from 'react'
import { Button } from 'antd'
import styles from './comment-management.module.scss'
import cs from 'classnames'
interface Props {
  list: Array<{
    user: string
    msg: string
  }>
  handleDelete: Function
}

function CommentManagementRight(props: Props) {
  return (
    <div className={styles.right}>
      <h4>评论列表</h4>
      <ul>
        {props.list.length > 0
          ? props.list.map((item, index) => (
              <li key={index}>
                <div>
                  <p>
                    {new Date().toString()} {item.user}说
                    <Button
                      className={styles.delete}
                      type="danger"
                      onClick={() => props.handleDelete(index)}
                    >
                      删除评论
                    </Button>
                  </p>
                  <p>{item.msg}</p>
                </div>
              </li>
            ))
          : '暂无评论，赶紧抢沙发呀'}
      </ul>
    </div>
  )
}

export default CommentManagementRight
