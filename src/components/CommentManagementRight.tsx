import React from 'react'

interface Props {
  list: Array<{
    user: string
    msg: string
  }>
  handleDelete: Function
}

function CommentManagementRight(props: Props) {
  return (
    <div>
      <h4>评论列表</h4>
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>
            <div>
              <p>
                {new Date().toString()} {item.user}说
                <button onClick={() => props.handleDelete(index)}>
                  删除评论
                </button>
              </p>
              <p>{item.msg}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

CommentManagementRight.defaultProps = {}

export default CommentManagementRight
