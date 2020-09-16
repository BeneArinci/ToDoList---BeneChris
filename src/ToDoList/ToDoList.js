import React from 'react';
import ToDo from '../ToDo/ToDo'

const ToDoList = ({todoArray}) => {
  const list = todoArray.map((todo, i) => {
    return <ToDo todo={todo} key={i}/>
  })
  return (
    <div>
      {list}
    </div>
  )
}

export default ToDoList