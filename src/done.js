import React from 'react';
import DoneItem from './done_item';

const Done = ({ allTodos,changeState }) => {
  let allDones = allTodos.filter(done => done.state === "done");
  let done = allDones.map((done,i) => {
        return (
         <DoneItem
           key={i}
           done={done}
           changeState={changeState}
          />
        );
  });
  return (
    <div className="container">
      <h1>Done</h1>
      {done}
    </div>
  )
}




export default Done;
