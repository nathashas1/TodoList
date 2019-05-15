import React from 'react';


const DoneItem = ({ done,changeState }) => {

  let leftBtn = "/left.svg"
  return (
    <div className="todoItem">
      <img className="imageIcon" src={leftBtn} alt="" onClick={() =>changeState("left","done",done.id)}/>
      <div>{done.text}</div>
    </div>
  )
}




export default DoneItem;
