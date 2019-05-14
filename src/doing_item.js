import React from 'react';


const DoingItem = ({ doing,changeState }) => {
  let rightBtn = "/right.svg"
  let leftBtn = "/left.svg"
  return (
    <div className="todoItem">
      <img className="imageIconRight" src={rightBtn} alt="" onClick={() =>changeState("right","doing",doing.id)}/>
      {doing.text}
      <img className="imageIconLeft" src={leftBtn} alt="" onClick={() =>changeState("left","doing",doing.id)}/>
    </div>
  )
}




export default DoingItem;
