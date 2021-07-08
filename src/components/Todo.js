import React from 'react'

const Todo = props => {
  const handleClick = (evt) => {
    props.handleToggle(props.item.id)
  }

  return (
    <div onClick={handleClick} className={`list${props.item.completed ? ' completed' : ''}`} >
      <p>{props.item.task}</p>
    </div>
  )
}

export default Todo