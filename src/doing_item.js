import React from 'react';


const DoingItem = ({ doing,changeState }) => {
  let rightBtn = "/right1.png"
  let leftBtn = "/left1.png"
  return (
    <div className="todoItem">
      <img className="imageIcon" src={leftBtn} alt="" onClick={() =>changeState("left","doing",doing.id)}/>
      <div className="text">{doing.text}</div>
      <img className="imageIcon" src={rightBtn} alt="" onClick={() =>changeState("right","doing",doing.id)}/>
    </div>
  )
}




export default DoingItem;
