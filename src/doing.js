import React from 'react';
import DoingItem from './doing_item';

const Doing = ({ allTodos,changeState }) => {

  let arr = []
  let doings = allTodos.map((doing,i) => {
    if (doing.state === "doing") {
      arr.push(doing)
        return (
         <DoingItem
           key={i}
           doing={doing}
           right={"yes"}
           left={"yes"}
           changeState={changeState}
          />
        );
    } else {
      return null
    }
  });
    console.log("newArr",arr)
  return (
    <div className="">
     <h1>Doing</h1>
      {doings}
    </div>
  )
}




export default Doing;
