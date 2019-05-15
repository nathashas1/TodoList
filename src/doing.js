import React from 'react';
import DoingItem from './doing_item';

const Doing = ({ allTodos,changeState }) => {
  let allDoings = allTodos.filter(doing => doing.state === "doing");
  let doings = allDoings.map((doing,i) => {
        return (
         <DoingItem
           key={i}
           doing={doing}
           right={"yes"}
           left={"yes"}
           changeState={changeState}
          />
        );
  });
  return (
    <div className="container">
     <h1>Doing</h1>
      {doings}
    </div>
  )
}




export default Doing;
