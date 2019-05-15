import React from 'react';




const TodoItem = ({ todo,changeState }) => {
  let rightBtn = "/right1.png"
  return (
    <div className="todoItem">
      <div className="text">{todo.text}</div>
      <img className="imageIcon" src={rightBtn} alt="" onClick={() => changeState("right","todo",todo.id)}/>
    </div>
  )
}





export default TodoItem;
