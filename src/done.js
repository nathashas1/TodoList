import React from 'react';
import DoneItem from './done_item';

const Done = ({ allTodos,changeState }) => {

  let arr = []
  let done = allTodos.map((done,i) => {
    if (done.state === "done") {
      arr.push(done)
        return (
         <DoneItem
           key={i}
           done={done}
           changeState={changeState}
          />
        );
    } else {
      return null
    }
  });
  console.log("arr",arr)
  return (
    <div className="container">
      <h1>Done</h1>
      {done}
    </div>
  )
}




export default Done;
