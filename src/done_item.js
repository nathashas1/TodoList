import React from 'react';


const DoneItem = ({ done,changeState }) => {

  let leftBtn = "/left.svg"
  return (
    <div className="todoItem">
      <img className="imageIcon" src={leftBtn} alt="" onClick={() =>changeState("left","done",done.id)}/>
      {done.text}
    </div>
  )
}




export default DoneItem;
