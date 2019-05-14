import React from 'react';




const TodoItem = ({ todo,changeState }) => {
  let rightBtn = "/right.svg"
  // let leftBtn = this.props.left ? "/left.svg" : null
  return (
    <div className="todoItem">
      {todo.text}
      <img className="imageIconRight" src={rightBtn} alt="" onClick={() => changeState("right","todo",todo.id)}/>
    </div>
  )
}





export default TodoItem;
