import React from 'react';


const DoingItem = ({ doing,changeState }) => {
  let rightBtn = "/right.svg"
  let leftBtn = "/left.svg"
  return (
    <div className="taskItem">
      <img className="imageIcon" src={leftBtn} alt="" onClick={changeState("left","doing",doing.id)}/>
      {doing.text}
      <img className="imageIcon" src={rightBtn} alt="" onClick={changeState("right","doing",doing.id)}/>
    </div>
  )
}




export default DoingItem;
